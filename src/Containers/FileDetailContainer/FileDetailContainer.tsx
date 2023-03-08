import React from "react";
import "./FileDetailContainer.scss";
import { MdOutlineContentCopy } from "react-icons/md";

function FileDetailContainer() {
  return (
    <div className="FileDetailContainer">
      <div className="detailBox">
        <p className="detailBox__label">File ID</p>
        <div className="detailBox__infoBox">
          <p className="text">Lorem, ipsum dolor.</p>
          <span className="icon">
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>
      <div className="detailBox">
        <p className="detailBox__label">File Name</p>
        <div className="detailBox__infoBox">
          <p className="text">Lorem, ipsum dolor.</p>
          <span className="icon">
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>
      <div className="detailBox">
        <p className="detailBox__label">Piece CID</p>
        <div className="detailBox__infoBox">
          <p className="text">Lorem, ipsum dolor.</p>
          <span className="icon">
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>
      <div className="detailBox">
        <p className="detailBox__label">Payload CID</p>
        <div className="detailBox__infoBox">
          <p className="text">Lorem, ipsum dolor.</p>
          <span className="icon">
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>

      <div className="splitBox">
        <div className="detailBox">
          <p className="detailBox__label">File Size</p>
          <div className="detailBox__infoBox">
            <p className="text">Lorem, ipsum dolor.</p>
            <span className="icon">
              <MdOutlineContentCopy />
            </span>
          </div>
        </div>

        <div className="detailBox">
          <p className="detailBox__label">Piece Size</p>
          <div className="detailBox__infoBox">
            <p className="text">Lorem, ipsum dolor.</p>
            <span className="icon">
              <MdOutlineContentCopy />
            </span>
          </div>
        </div>
      </div>
      <div className="splitBox">
        <div className="detailBox">
          <p className="detailBox__label">Upload Date</p>
          <div className="detailBox__infoBox">
            <p className="text">Lorem, ipsum dolor.</p>
            <span className="icon">
              <MdOutlineContentCopy />
            </span>
          </div>
        </div>

        <div className="detailBox">
          <p className="detailBox__label">Expire Date</p>
          <div className="detailBox__infoBox">
            <p className="text">Lorem, ipsum dolor.</p>
            <span className="icon">
              <MdOutlineContentCopy />
            </span>
          </div>
        </div>
      </div>

      <div className="detailBox">
        <p className="detailBox__label">URL</p>
        <div className="detailBox__infoBox">
          <p className="text">Lorem, ipsum dolor.</p>
          <span className="icon">
            <MdOutlineContentCopy />
          </span>
        </div>
      </div>

      <p className="disclaimer">
        *This is the system generated data you can only copy it 
      </p>

      <div className="FileDetailContainer__buttonContainer">

        <button className="_buttonOutline">Delete File</button>
        <button className="_buttonFill">Download</button>

      </div>
    </div>
  );
}

export default FileDetailContainer;
