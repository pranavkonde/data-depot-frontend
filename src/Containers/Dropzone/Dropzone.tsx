import React, { useCallback } from "react";
import "./Dropzone.scss";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../../Utils/Services/backend";

interface Props {
  setUploadProgress: React.Dispatch<React.SetStateAction<number>>;
}

const Dropzone: React.FC<Props> =({setUploadProgress})=> {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(typeof acceptedFiles);
    console.log(acceptedFiles);
    (async()=>{
      await uploadFile(acceptedFiles,setUploadProgress)
    })()
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
