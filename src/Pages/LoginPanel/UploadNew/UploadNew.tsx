import React from "react";
import "./UploadNew.scss";
import { IoIosArrowBack } from "react-icons/io";
import { Dropzone } from "../../../Containers";
import Navigator from "../../../Utils/GlobalNavigation/navigationHistory";


function UploadNew() {
  return (
    <div className="UploadNew _container">
      <p className="_titleText">
        <span onClick={()=>{
          Navigator?.push('/dashboard')
        }}>
          <IoIosArrowBack />
        </span>
        Upload New File
      </p>

      <div className="UploadNew__dropBoxContainer _card">
        <Dropzone/>
        <p className="disclaimer">*Max 20 files allowed not more than 5 GB</p>

        <div className="buttonContainer"></div>
      </div>
    </div>
  );
}

export default UploadNew;
