import React from "react";
import "./TableContainer.scss";

function TableContainer() {
  return (
    <div className="TableContainer _card">
      <table>
        <thead>
          <tr>
            <th>File ID</th>
            <th>File Name</th>
            <th>Status</th>
            <th>Upload Date</th>
            <th>Expiry Date</th>
            <th>URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;
