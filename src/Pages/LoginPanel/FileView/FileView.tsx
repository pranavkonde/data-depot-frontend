import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FileDetailContainer } from "../../../Containers";
import Navigator from "../../../Utils/GlobalNavigation/navigationHistory";
import "./FileView.scss";

function FileView() {
  return (
    <div className="FileView _container">
      <p className="_titleText">
        <span
          onClick={() => {
            Navigator?.push("/dashboard");
          }}
        >
          <IoIosArrowBack />
        </span>
        File View
      </p>

      <div className="FileView__detailContainer _card">
        <FileDetailContainer/>        
      </div>
    </div>
  );
}

export default FileView;
