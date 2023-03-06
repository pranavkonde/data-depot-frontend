import React from 'react';
import { FilterTab, StatBox } from '../../../Components';
import { TableContainer } from '../../../Containers';
import './Dashboard.scss';

function Dashboard() {
  return (
    <div className='Dashboard _container'>
        <p className="Dashboard__title">Dashboard</p>
        <div className="Dashboard__StatContainer">
            <StatBox/>
        </div>

        <FilterTab/>

        <TableContainer/>


    </div>
  )
}

export default Dashboard