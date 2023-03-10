import React, { useState } from "react";
import "./UploadNew.scss";
import { IoIosArrowBack } from "react-icons/io";
import { Dropzone } from "../../../Containers";
import Navigator from "../../../Utils/GlobalNavigation/navigationHistory";
import { UploadBar } from "../../../Components";

function UploadNew() {
  const [uploadProgress, setUploadProgress] = useState(0);
  return (
    <div className="UploadNew _container">
      <p className="_titleText">
        <span
          onClick={() => {
            Navigator?.push("/dashboard");
          }}
        >
          <IoIosArrowBack />
        </span>
        Upload New File
      </p>

      <div className="UploadNew__dropBoxContainer _card">
        <Dropzone setUploadProgress={setUploadProgress} />
        <p className="disclaimer">*Max 20 files allowed not more than 5 GB</p>

        <div className="buttonContainer"></div>
      </div>

      {uploadProgress > 0 && uploadProgress < 100 ? (
        <UploadBar uploadProgress={uploadProgress} />
      ) : (
        ""
      )}
    </div>
  );
}

export default UploadNew;
