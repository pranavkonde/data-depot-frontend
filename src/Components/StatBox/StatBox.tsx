import React from "react";
import "./StatBox.scss";

function StatBox() {
  return (
    <div className="StatBox">
      <div className="StatBox__Card _card">
       <p className="title">Stats</p>
       <div className="detailBox">
        <div className="detailBox_stat">
            <p className="label">Total GB Uploaded</p>
            <p className="stat">18
            <small>GB</small></p>
        </div>
        <div className="detailBox_stat">
            <p className="label">Active Links</p>
            <p className="stat">62
            <small>%</small></p>
        </div>
        <div className="detailBox_stat">
            <p className="label">Dummy</p>
            <p className="stat">4</p>
        </div>
       </div>
      </div>
      <div className="StatBox__ButtonBox">

        <button className="_buttonFill">
            Upload New Button
        </button>
        <button className="_buttonOutline">
            Dummy Button
        </button>

      </div>
    </div>
  );
}

export default StatBox;
