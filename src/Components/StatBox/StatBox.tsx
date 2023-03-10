import React, { useEffect, useState } from "react";
import Navigator from "../../Utils/GlobalNavigation/navigationHistory";
import { bytesToString } from "../../Utils/Services/Other";
import "./StatBox.scss";

interface Props {
  userDetails: any;
  filesData: any[];
}

const StatBox: React.FC<Props> = ({ userDetails, filesData }) => {
  const [statData, setStatData] = useState<any>({});
  useEffect(() => {
    let activeFiles = filesData.filter(
      (item) => item?.fileStatus === "CAR Created"
    );
    let object = {
      totalFiles: userDetails?.data?.filesUploaded,
      totalData: bytesToString(userDetails?.data?.dataUploaded),
      activePercentage: (
        (activeFiles?.length / filesData?.length) *
        100
      ).toFixed(1),
    };
    setStatData(object);

    return () => {};
  }, [userDetails, filesData]);

  return (
    <div className="StatBox">
      <div className="StatBox__Card _card">
        <p className="title">Stats</p>
        <div className="detailBox">
          <div className="detailBox_stat">
            <p className="label">Total Data Uploaded</p>
            <p className="stat">
              {statData?.totalData?.split(" ")[0]}&nbsp;
              <small>{statData?.totalData?.split(" ")[1]}</small>
            </p>
          </div>
          <div className="detailBox_stat">
            <p className="label">Total Files Uploaded</p>
            <p className="stat">{statData?.totalFiles}</p>
          </div>

          <div className="detailBox_stat">
            <p className="label">Active Percentage</p>
            <p className="stat">
              {statData?.activePercentage}
              <small>%</small>
            </p>
          </div>
        </div>
      </div>
      <div className="StatBox__ButtonBox">
        <button
          className="_buttonFill"
          onClick={() => {
            Navigator.push("/dashboard/upload-new");
          }}
        >
          Upload New File
        </button>
        {/* <button className="_buttonOutline">Dummy Button</button> */}
      </div>
    </div>
  );
};

export default StatBox;
