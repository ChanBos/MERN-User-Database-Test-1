// Imported React library.
import React, { useState } from "react";
// Imported Axios library.
import axios from "axios";
// Imported components from React Bootstrap.
import { Form, Button } from "react-bootstrap";

/**
 * Utilized React Bootstrap Form and Button to create a form that can be used to input data.
 * Set the initial states of the props.
 * Fetching the content from http://localhost:8080/data/add. Utilizing the Post method.
 * If successful an alert will appear to confirm success and the content will be added to the UI as objects.
 * If unsuccessful an alert will appear displaying the errors.
 * Created a function to reset the input fields.
 * @returns Data form with a POST button to input new data into the database and a CANCEL button to reset input fields.
 */

const DataForm = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  const addData = async () => {
    try {
      let response = await axios({
        url: "http://localhost:8080/data/add",
        method: "post",
        data: {
          firstName,
          surname,
          idNumber,
          dateOfBirth,
        },
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => {
          alert(response.data.message);
        })
        .then(() => {
          window.location.reload();
        });
      alert(response.data.message);
    } catch (error) {
      alert(Object.values(error.response.data) + ".");
      console.log(error.response.data);
    }
  };

  const clearForm = (e) => {
    e.preventDefault();

    setFirstName("");
    setSurname("");
    setIdNumber("");
    setDateOfBirth("");
  };

  return (
    <div>
      <h1>Data Input Form</h1>
      <Form>
        <Form.Group className="required">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="required">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            placeholder="Enter Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="required">
          <Form.Label>ID Number</Form.Label>
          <Form.Control
            placeholder="Enter ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="required">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            placeholder="Enter Date of Birth (DD/MM/YYYY)"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
        className="form-btn"
        variant="success"
        type="submit"
        onClick={(e) => addData(e)}
      >
        POST
      </Button>
      <Button
        className="form-btn"
        variant="danger"
        type="submit"
        onClick={clearForm}
      >
        CANCEL
      </Button>
    </div>
  );
};

// Exporting DataForm.js to App.js.
export default DataForm;
