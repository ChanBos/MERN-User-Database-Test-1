// Requiring Mongoose.
const mongoose = require("mongoose");
// Requiring unique validator plugin.
const uniqueValidator = require("mongoose-unique-validator");
// Requiring moment.
const moment = require("moment");

/**
 * Created a model, defining the schema of the data in order to save and retrieve data.
 * Set all fields to Strings and required fields.
 * Added timestamps to show when the information has been added.
 *
 * Validation methods:
 * Fields name and surname - Utilized /^[a-zA-Z]{2,}$/ to ensure that only letters are entered.
 * Field idNumber -
 * Utilized unique validator plugin to ensure that the idNumber is unique.
 * Utilized .toString() to ensure that only numbers are entered.
 * Utilized !isNaN() and isFinite() to ensure that only numbers are entered.
 * Field dateOfBirth - Utilized moment.js to ensure that only valid dates, formatted as DD/MM/YYYY, are entered.
 */

const dataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      validate: {
        validator: function (name) {
          return /^[a-zA-Z]+$/.test(name);
        },
        message: "Name can only contain alphabetic characters",
      },
    },
    surname: {
      type: String,
      required: [true, "Surname is required"],
      validate: {
        validator: function (surname) {
          return /^[a-zA-Z]+$/.test(surname);
        },
        message: "Surname can only contain alphabetic characters",
      },
    },
    idNumber: {
      type: String,
      required: [true, "ID Number is required"],
      unique: true,
      validate: [
        {
          validator: function (idNumber) {
            return idNumber.toString().length === 13;
          },
          message: (idNumber) =>
            `ID Number Must Have 13 Numbers. You entered ${
              idNumber.value
            }, which is ${idNumber.value.toString().length} numbers long`,
        },
        {
          validator: function (idNumber) {
            return !isNaN(parseFloat(idNumber)) && isFinite(idNumber);
          },
          message: (idNumber) =>
            `ID Number Can Only Contain Number Values. You entered ${idNumber.value}`,
        },
      ],
    },
    dateOfBirth: {
      type: String,
      required: [true, "Date of Birth is required"],
      validate: {
        validator: function (dateOfBirth) {
          return moment(dateOfBirth, "DD/MM/YYYY", true).isValid();
        },
        message: "Invalid Date of Birth Format. Expected DD/MM/YYYY",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Applied the unique validator plugin to the model.
dataSchema.plugin(uniqueValidator, { message: "ID Number Already Exists" });

// Exporting dataSchema.js to server.js.
module.exports = mongoose.model("Data", dataSchema);
