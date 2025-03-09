import React, { useEffect, useState } from "react";
import Navigator from "../../Utils/GlobalNavigation/navigationHistory";
import { bytesToString } from "../../Utils/Services/Other";
import "./StatBox.scss";
import CsvDownloadButton from 'react-json-to-csv'


interface Props {
  userDetails: any;
  filesData: any[];
  showData: any[];
}

const StatBox: React.FC<Props> = ({ userDetails, filesData,showData }) => {
  const [statData, setStatData] = useState<any>({});
  const [downloadData, setDownloadData] = useState<any[]>([]);
  useEffect(() => {
 
    let object = {
      totalFiles: userDetails?.data?.filesUploaded,
      totalData: bytesToString(userDetails?.data?.dataUploaded),
    };
    setStatData(object);

    return () => {};
  }, [userDetails, filesData]);

  useEffect(()=>{
    let newArr = [...showData];
    newArr.forEach((item)=> delete item?.userName);
   setDownloadData(newArr);

  },[showData])



  return (
    <div className="StatBox">
      <div className="StatBox__Card _card">
        <p className="title">Stats</p>
        <div className="detailBox">
          <div className="detailBox_stat">
            <p className="label">Total Data Uploaded</p>
            <p className="stat">
              {statData?.totalData?.split(' ')[0]}&nbsp;
              <small>{statData?.totalData?.split(' ')[1]}</small> / <small>100 GB</small>
            </p>
          </div>
          <div className="detailBox_stat">
            <p className="label">Total Files Uploaded</p>
            <p className="stat">{statData?.totalFiles}</p>
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
        <CsvDownloadButton className="_buttonOutline" data={downloadData} >
          Download CSV 
        </CsvDownloadButton>

      </div>
    </div>
  );
};

export default StatBox;
