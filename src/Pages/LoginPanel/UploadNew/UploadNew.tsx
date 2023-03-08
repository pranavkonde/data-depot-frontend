import React from "react";
import "./UploadNew.scss";
import { IoIosArrowBack } from "react-icons/io";
import { Dropzone } from "../../../Containers";


function UploadNew() {
  return (
    <div className="UploadNew _container">
      <p className="_titleText">
        <span>
          <IoIosArrowBack />
        </span>
        Upload New File
      </p>

      <div className="UploadNew__dropBoxContainer _card">
        <Dropzone/>

      </div>
    </div>
  );
}

export default UploadNew;
