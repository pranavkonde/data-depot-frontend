import React from "react";
import { FilterTab, Pagination, StatBox, UploadBar } from "../../../Components";
import { TableContainer } from "../../../Containers";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="Dashboard _container">
      <p className="_titleText">Dashboard</p>
      <StatBox />
      <FilterTab />
      <TableContainer />
      <Pagination />
      <UploadBar/>
    </div>
  );
}

export default Dashboard;
