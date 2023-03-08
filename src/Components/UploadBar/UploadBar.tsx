import React from "react";
import "./UploadBar.scss";
import ProgressBar from "@ramonak/react-progress-bar";

function UploadBar() {
  return (
    <div className="UploadBar _card">
      <p className="UploadBar__title">Uploading Files</p>
      <div className="UploadBar__processBar">
        <ProgressBar
          completed={60}
          maxCompleted={100}
          isLabelVisible={false}
          height="10px"
          className="wrapper"
          barContainerClassName="container"
          labelClassName="label"
        />
      </div>
    </div>
  );
}

export default UploadBar;
