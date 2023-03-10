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
} from "../../Utils/Services/Other";
import "./TableContainer.scss";

interface Props {
  filesData: any[];
}

const TableContainer: React.FC<Props> = ({ filesData }) => {
  return (
    <div className="TableContainer _card ">
      <table className="">
        <thead>
          <tr>
            <th>File ID</th>
            <th>File Name</th>
            <th>File Size</th>
            <th>Status</th>
            <th>Piece CID</th>
            <th>Piece SIze</th>
            <th>CarFile Link</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filesData &&
            filesData?.map((item, index) => (
              <tr key={index}>
                <td>{item?.id ? clipText(item?.id, 20, 6) : "-"}</td>
                <td>{item?.fileName}</td>
                <td>
                  <span className="fileSize">
                    {bytesToString(item?.fileSize)}
                  </span>
                </td>
                <td>
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
                </td>
                <td>
                  {item?.pieceCid ? clipText(item?.pieceCid, 20, 6) : "-"}
                </td>
                <td>
                  {item?.pieceSize ? bytesToString(item?.pieceSize) : "-"}
                </td>
                <td>
                  {item?.pieceCid
                    ? clipText(
                        `https://data.lighthouse.storage/api/download/download_car?piece_cid=${item?.pieceCid}`,
                        20,
                        6
                      )
                    : "-"}
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
                        `https://data.lighthouse.storage/api/download/download_car?piece_cid=${item?.pieceCid}.car`,
                        item?.fileName
                      );
                    }}
                  >
                    <BiDownload />
                  </span>
                  <span
                    className="icon ptr"
                    onClick={() => {
                      copyToClipboard(JSON.stringify(item));
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
