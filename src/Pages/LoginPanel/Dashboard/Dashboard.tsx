import React, { useEffect, useState } from "react";
import { FilterTab, Pagination, StatBox, UploadBar } from "../../../Components";
import { TableContainer } from "../../../Containers";
import { setUserName } from "../../../Utils/Services/Auth";
import { getUploads, getUserDetails } from "../../../Utils/Services/backend";
import "./Dashboard.scss";

function Dashboard() {
 const [filesData, setFilesData] = useState<any[]>([]); 
 const [filteredFilesData, setFilteredFilesData] = useState<any[]>([]); 
 const [showData, setShowData] = useState<any[]>([]); 
 const [userDetails, setUserDetails] = useState<any[]>([]); 

useEffect(() => {
  console.log('instance Dashboard');
  (async () => {
    const response = await getUploads(1);
    if (response !== undefined && response?.status === 200) {
      setFilesData(response.data ?? []); 
    }
    const userDetail = await getUserDetails();
    
    if (userDetail !== undefined && userDetail?.status === 200) {
      setUserDetails(userDetail.data ?? {}); 
      
    }
  })();
}, []);

  return (
    <div className="Dashboard _container">
      <p className="_titleText">Dashboard</p>
      <StatBox userDetails={userDetails} filesData={filesData} showData={showData} />
      <FilterTab filesData={filesData} setFilteredFilesData={setFilteredFilesData}/>
      <TableContainer showData={showData} />
      <Pagination setShowData={setShowData} filteredFilesData={filteredFilesData} />
    </div>
  );
}

export default Dashboard;
