import React from "react";
import "./TableContainer.scss";

function TableContainer() {
  return (
    <div className="TableContainer _card ">
      <table className="">
        <thead>
          <tr>
            <th>File ID</th>
            <th>File Name</th>
            <th>File Size</th>
            <th>Status</th>
            <th>Upload Date</th>
            <th>Expiry Date</th>
            <th>URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#3066</td>
            <td>Abcd</td>
            <td>
                <span className="fileSize">5GB</span>
            </td>
            <td>
                <span className="fileSize">Active</span>
            </td>
            <td>Jan 6,2023</td>
            <td>March 1,2023</td>
            <td>url.bafybeih5zjybczcbaj4</td>
            <td>
                <span className="download">Download</span>
            </td>
          </tr>
          <tr>
            <td>#3066</td>
            <td>Abcd</td>
            <td>
                <span className="fileSize">5GB</span>
            </td>
            <td>
                <span className="fileSize">Active</span>
            </td>
            <td>Jan 6,2023</td>
            <td>March 1,2023</td>
            <td>url.bafybeih5zjybczcbaj4</td>
            <td>
                <span className="download">Download</span>
            </td>
          </tr>
          <tr>
            <td>#3066</td>
            <td>Abcd</td>
            <td>
                <span className="fileSize">5GB</span>
            </td>
            <td>
                <span className="fileSize">Active</span>
            </td>
            <td>Jan 6,2023</td>
            <td>March 1,2023</td>
            <td>url.bafybeih5zjybczcbaj4</td>
            <td>
                <span className="download">Download</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;
