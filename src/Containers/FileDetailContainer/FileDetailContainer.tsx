import React from "react";
import "./FileDetailContainer.scss";
import { MdOutlineContentCopy } from "react-icons/md";
import { useLocation } from "react-router-dom";
import {
  bytesToString,
  copyToClipboard,
  downloadFileFromURL,
  getCarLink,
} from "../../Utils/Services/Other";
import moment from "moment";
import { deleteFile } from "../../Utils/Services/backend";

function FileDetailContainer() {
  const { state } = useLocation();
  const data = state?.data;
  console.log(data);

  return (
    <div className="FileDetailContainer">
      <div className="detailBox">
        <p className="detailBox__label">File ID</p>
        <div className="detailBox__infoBox">
          <p className="text">{data?.id}</p>
          <span
            className="icon"
            onClick={() => {
              copyToClipboard(data?.id);
            }}
          >
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>
      <div className="detailBox">
        <p className="detailBox__label">File Name</p>
        <div className="detailBox__infoBox">
          <p className="text">{data?.fileName}</p>
          <span
            className="icon"
            onClick={() => {
              copyToClipboard(data?.fileName);
            }}
          >
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>
      <div className="detailBox">
        <p className="detailBox__label">Piece CID</p>
        <div className="detailBox__infoBox">
          <p className="text">{data?.pieceCid}</p>
          <span
            className="icon"
            onClick={() => {
              copyToClipboard(data?.pieceCid);
            }}
          >
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>
      <div className="detailBox">
        <p className="detailBox__label">Payload CID</p>
        <div className="detailBox__infoBox">
          <p className="text">{data?.payloadCid}</p>
          <span
            className="icon"
            onClick={() => {
              copyToClipboard(data?.payloadCid);
            }}
          >
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>

      <div className="splitBox">
        <div className="detailBox">
          <p className="detailBox__label">CAR Size</p>
          <div className="detailBox__infoBox">
            <p className="text">{bytesToString(data?.carSize)}</p>
            <span
              className="icon"
              onClick={() => {
                copyToClipboard(bytesToString(data?.fileSize));
              }}
            >
              <MdOutlineContentCopy />
            </span>
          </div>
        </div>

        <div className="detailBox">
          <p className="detailBox__label">Piece Size</p>
          <div className="detailBox__infoBox">
            <p className="text">{bytesToString(data?.pieceSize)}</p>
            <span
              className="icon"
              onClick={() => {
                copyToClipboard(bytesToString(data?.pieceSize));
              }}
            >
              <MdOutlineContentCopy />
            </span>
          </div>
        </div>
      </div>
      <div className="splitBox">
        <div className="detailBox">
          <p className="detailBox__label">Upload Date</p>
          <div className="detailBox__infoBox">
            <p className="text">
              {moment(data?.createdAt).format("DD-MM-YYYY h:mm:ss")}
            </p>
            <span
              className="icon"
              onClick={() => {
                moment(data?.createdAt).format("DD-MM-YYYY h:mm:ss");
              }}
            >
              <MdOutlineContentCopy />
            </span>
          </div>
        </div>

        <div className="detailBox">
          <p className="detailBox__label">Expire Date</p>
          <div className="detailBox__infoBox">
            <p className="text">
              {moment(data?.createdAt)
                .add(7, "days")
                .format("DD-MM-YYYY h:mm:ss")}
            </p>
            <span
              className="icon"
              onClick={() => {
                copyToClipboard(
                  moment(data?.createdAt)
                    .add(7, "days")
                    .format("DD-MM-YYYY h:mm:ss")
                );
              }}
            >
              <MdOutlineContentCopy />
            </span>
          </div>
        </div>
      </div>

      <div className="detailBox">
        <p className="detailBox__label">URL</p>
        <div className="detailBox__infoBox">
          <p className="text">{getCarLink(data?.id)}</p>
          <span className="icon" onClick={()=>{
            copyToClipboard(getCarLink(data?.id))
          }}>
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>

      <p className="disclaimer">
        *This is the system generated data you can only copy it
      </p>

      <div className="FileDetailContainer__buttonContainer">
        <button className="_buttonOutline" onClick={()=>{
          deleteFile(data?.id)
        }}>Delete File</button>
        <button
          className="_buttonFill"
          onClick={() => {
            downloadFileFromURL(
              getCarLink(data?.id),
              data?.id+'.car'
            );
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default FileDetailContainer;
