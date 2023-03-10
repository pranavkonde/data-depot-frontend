import React from 'react';
import './Pagination.scss';

function Pagination() {
  return (
    <div className='Pagination _card'>
        <div className="Pagination__pageNumber">
            Page 1 of 1
        </div>
        <div className="Pagination__buttonContainer">
            <button className="_buttonOutline" disabled={true}>Previous</button>
            <button className="_buttonFill" disabled={true}>Next</button>
        </div>
    </div>
  )
}

export default Pagination