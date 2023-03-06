import React from 'react'
import './FilterTab.scss'
function FilterTab() {
  return (
    <div className='FilterTab _card'>
        <div className="FilterTab__TabBox">
            <div className="tab">All URLs</div>
            <div className="tab">Active URLs</div>
            <div className="tab">Expired URLs</div>
        </div>
        <div className="FilterTab__SearchBox">
            <input type="text" placeholder='Search' />
            <button className='_buttonOutline'>Filter</button>
        </div>
    </div>
  )
}

export default FilterTab