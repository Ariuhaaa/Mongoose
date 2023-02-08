const fs = require("fs");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/user.json";

exports.getAll = (request, response) => {
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const savedData = JSON.parse(data);

    return response.json({ status: true, result: savedData });
  });
};

// exports.get = (request, response) => {
//   const { id } = request.params;

//   fs.readFile(dataFile, "utf-8", (readErr, data) => {
//     if (readErr) {
//       return response.json({ status: false, message: readErr });
//     }

//     const myData = JSON.parse(data);

//     const filteredData = myData.filter((el) => {
//       if (el.categoryId === id) {
//         return el;
//       }
//     });

//     return response.json({ status: true, result: filteredData });
//   });
// };

exports.create = (request, response) => {
  const { id, firstname, lastname, username, password, email } = request.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const newObj = {
      id: uuid.v4(),
      firstname,
      lastname,
      username,
      password,
      email,
    };

    parsedData.push(newObj);

    fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: parsedData });
    });
  });
};

exports.update = (request, response) => {
  const { id, firstname, lastname, username, password, email } = request.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const updateData = parsedData.map((userObj) => {
      if (userObj.id == id) {
        return { ...userObj, firstname, lastname, username, password, email };
      } else {
        return userObj;
      }
    });

    fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: updateData });
    });
  });
};

exports.delete = (request, response) => {
  const { id } = request.params;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const deletedData = parsedData.filter((e) => e.id != id);

    fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return res.json({ status: false, message: writeErr });
      }
      return res.json({ status: true, result: deletedData });
    });
  });
};
