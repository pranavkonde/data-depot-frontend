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
    if (response !== undefined) {
      setFilesData(response.data ?? []); 
    }
  })();
}, []);

  return (
    <div className="Dashboard _container">
      <p className="_titleText">Dashboard</p>
      <StatBox />
      <FilterTab />
      <TableContainer />
      <Pagination />
      <UploadBar />
    </div>
  );
}

export default Dashboard;
