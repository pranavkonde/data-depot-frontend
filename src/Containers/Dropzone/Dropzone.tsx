import React, { useCallback } from "react";
import "./Dropzone.scss";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../../Utils/Services/backend";
import { notify } from "../../Utils/Services/notification";

interface Props {
  setUploadProgress: React.Dispatch<React.SetStateAction<number>>;
}

const Dropzone: React.FC<Props> = ({ setUploadProgress }) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log("Data to be Uploaded", acceptedFiles);

    if (acceptedFiles[0]?.type?.length > 0) {
      (async () => {
        await uploadFile(acceptedFiles, setUploadProgress);
      })();
    }else{
      notify('Please Upload Files Only','error')
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`Dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      <div className="Dropzone__contentBox">
        <img src="/uploadIcon.png" alt="" />
        <p>Browse File or Drag & Drop</p>
      </div>
    </div>
  );
};

export default Dropzone;
