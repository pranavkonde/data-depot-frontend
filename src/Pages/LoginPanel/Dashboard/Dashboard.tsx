import React, { useEffect, useState } from "react";
import { FilterTab, Pagination, StatBox, UploadBar } from "../../../Components";
import { TableContainer } from "../../../Containers";
import { getUploads } from "../../../Utils/Services/backend";
import "./Dashboard.scss";

function Dashboard() {
 const [filesData, setFilesData] = useState<any[]>([]); 

useEffect(() => {
  (async () => {
    const response = await getUploads(1);
    console.log(response);
    if (response !== undefined && response?.status === 200) {
      setFilesData(response.data ?? []); 
    }
  })();
}, []);

  return (
    <div className="Dashboard _container">
      <p className="_titleText">Dashboard</p>
      <StatBox />
      <FilterTab />
      <TableContainer filesData={filesData} />
      <Pagination />
      {/* <UploadBar /> */}
    </div>
  );
}

export default Dashboard;
