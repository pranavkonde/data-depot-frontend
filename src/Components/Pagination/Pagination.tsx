import React from 'react';
import './Pagination.scss';

function Pagination() {
  return (
    <div className='Pagination _card'>
        <div className="Pagination__pageNumber">
            Page 1 of 10
        </div>
        <div className="Pagination__buttonContainer">
            <button className="_buttonOutline">Previous</button>
            <button className="_buttonFill">Next</button>
        </div>
    </div>
  )
}

export default Pagination