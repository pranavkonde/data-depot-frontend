import React, { useCallback } from "react";
import "./Dropzone.scss";
import { useDropzone } from "react-dropzone";

function Dropzone() {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={`Dropzone ${isDragActive 
    ? 'active':''}`} >
      <input {...getInputProps()} />
      <div className="Dropzone__contentBox">
        <img src="/uploadIcon.png" alt="" />
        <p>Browse File or Drag & Drop</p>
      </div>

    </div>
  );
}

export default Dropzone;
