// Imported React library.
import React, { useState, useEffect } from "react";
// Imported Axios library.
import axios from "axios";
// Imported Table from React Bootstrap.
import { Table } from "react-bootstrap";

/**
 * Utilized React Bootstrap Table to create a table that can be used to output data.
 * Set the initial states of the props.
 * Getting the rooms' data via the the useEffect() hook and the Axios GET method from http://localhost:8080/data/get.
 * If all is in order the list of rooms will be displayed. If an error occurs an error will be displayed.
 * Utilizing the map() method to iterate over the array and to return the data.
 * @returns Data table to output existing data from the database.
 */

const DataTable = () => {
  const [dataEntries, setDataEntries] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await (
          await axios.get("http://localhost:8080/data/get")
        ).data;
        setDataEntries(data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Data Output Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>ID Number</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {dataEntries.map((entries, i) => {
            return (
              <tr key={i}>
                <td>{entries.name}</td>
                <td>{entries.surname}</td>
                <td>{entries.idNumber}</td>
                <td>{entries.dateOfBirth}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

// Exporting DataTable.js to App.js.
export default DataTable;
