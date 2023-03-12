import React, { useEffect, useState } from "react";
import "./Pagination.scss";

interface Props {
  filteredFilesData: any[];
  setShowData: React.Dispatch<React.SetStateAction<any[]>>;
}

const Pagination: React.FC<Props> = ({ filteredFilesData, setShowData }) => {
  const pageSize = 10;
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
   
    setTotalPages(Math.ceil(filteredFilesData?.length / pageSize));
   
    return () => {};
  }, [filteredFilesData]);


  useEffect(() => {
    if(totalPages ===1){
      setShowData(filteredFilesData);
    }

    if(currentPage === totalPages){
      setShowData(filteredFilesData.slice((totalPages-1) * pageSize))
    }
    if(currentPage < totalPages){
      setShowData(filteredFilesData.slice((currentPage-1) * pageSize, currentPage*pageSize))
    }
  
    
  
    return () => {
      
    }
  }, [currentPage,totalPages])
  

  return (
    <div className="Pagination _card">
      <div className="Pagination__pageNumber">Page {currentPage} of {totalPages}</div>
      <div className="Pagination__buttonContainer">
        <button className="_buttonOutline" disabled={currentPage===1}
         onClick={()=>{
          (currentPage > 1) && setCurrentPage(currentPage-1)
        }}>
          Previous
        </button>
        <button className="_buttonFill" disabled={!(currentPage < totalPages)} onClick={()=>{
          (currentPage < totalPages) && setCurrentPage(currentPage+1)
        }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
