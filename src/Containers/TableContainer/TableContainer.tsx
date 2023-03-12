import React from "react";
import { BiDownload, BiCopy } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { MdOutlineVisibility } from "react-icons/md";

import Navigator from "../../Utils/GlobalNavigation/navigationHistory";
import {
  bytesToString,
  clipText,
  copyToClipboard,
  downloadFileFromURL,
  getCarLink,
} from "../../Utils/Services/Other";
import "./TableContainer.scss";

interface Props {
  showData: any[];
}

const TableContainer: React.FC<Props> = ({ showData }) => {
  return (
    <div className="TableContainer _card "  >
      <table className="">
        <thead>
          <tr>
            <th>File ID</th>
            <th>File Name</th>
            {/* <th>Status</th> */}
            <th>CarFile Link <br />(A1)</th>
            <th>Piece SIze <br />(A2)</th>
            <th>Car Size <br />(A3)</th>
            <th>Piece CID <br />(A4) </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {showData &&
            showData?.map((item, index) => (
              <tr key={index}>
                <td>{item?.id ? clipText(item?.id, 20, 6) : "-"}</td>
                <td>{item?.fileName}</td>
                  <td>
                  {item?.id
                    ? clipText(`${getCarLink(item?.id)}`, 20, 6)
                    : "-"}
                </td>
                <td>{item?.pieceSize ? item?.pieceSize : "-"}</td>

                <td>
                  <span className="fileSize">{item?.carSize}</span>
                </td>
                {/* <td>
                  {item?.fileStatus === "CAR Created" ? (
                    <span className="active">
                      <GoPrimitiveDot />
                      &nbsp;Active
                    </span>
                  ) : (
                    <span className="expired">
                      <GoPrimitiveDot />
                      &nbsp;Expired
                    </span>
                  )}
                </td> */}
                <td>
                  {item?.pieceCid ? clipText(item?.pieceCid, 20, 6) : "-"}
                </td>
              
                <td>
                  <span
                    className="icon ptr"
                    onClick={() => {
                      Navigator.push(`/dashboard/view-file/${item?.id}`, {
                        state: { data: item },
                      });
                    }}
                  >
                    <MdOutlineVisibility />
                  </span>
                  <span
                    className="icon ptr"
                    onClick={() => {
                      downloadFileFromURL(
                        `${getCarLink(item?.id)}`,
                        item?.id+'.car'
                      );
                    }}
                  >
                    <BiDownload />
                  </span>
                  <span
                    className="icon ptr"
                    onClick={() => {
                      copyToClipboard(
                        JSON.stringify({
                          piece_CID: item?.pieceCid ? item?.pieceCid : "-",
                          piece_Size: item?.pieceSize ? item?.pieceSize : "-",
                          car_Link: `${getCarLink(item?.id)}`,
                          car_Size: item?.carSize ? item?.carSize : "-",
                        })
                      );
                    }}
                  >
                    <BiCopy />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
