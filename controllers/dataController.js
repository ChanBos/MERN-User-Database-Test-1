// Requiring Mongoose.
const mongoose = require("mongoose");
// Requiring the schemas that has been created in the dataModel.js file.
const Data = require("../models/dataModel.js");

/**
 * POST/ CREATE:
 * @required  Body properties: data, difficulty, score.
 * @param {*} req Creating a new post request with the data props.
 * @param {*} res Data for a specific data entry that has been added.
 * @returns Data of the data entry that is being added from the request input or an error message should the
 * request be unsuccessful.
 */
exports.addController = async (req, res) => {
  const { firstName, surname, idNumber, dateOfBirth } = req.body;

  const newData = new Data({
    name: firstName,
    surname,
    idNumber,
    dateOfBirth,
  });

  try {
    await newData.save();
    res.send({ message: "Data Added Successfully" });
  } catch (error) {
    // if (error.name === "ValidationError") {
    //   console.error(Object.values(error.errors).map((val) => val.message));
    // } else {
    //   console.error(error);
    // }
    if (error.name === "ValidationError") {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      console.log(errors);

      return res.status(400).send(errors);
    }
    res.status(500).send("Something went wrong");
  }
};

/**
 * GET/ READ:
 * Requesting all the data information from the database and returning the response with the information.
 * @required  Content.
 * @param {*} req Getting the array of data.
 * @param {*} res Copy of the content.
 * @returns A list of current data entries that are already written.
 */

exports.getController = async (req, res) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (error) {
    return res.status(400).json({ message: "Error Fetching Data.", error });
  }
};
