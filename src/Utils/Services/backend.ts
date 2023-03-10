import axios from "axios";
import { notify } from "./notification";
import { BaseUrl } from "../Data/config";
import axiosInstance from "./AxiosInterceptor";

export const getUploads = async (pageNumber = 1) => {
  try {
    let response = await axiosInstance.get(
      `${BaseUrl}data/get_user_uploads?pageNo=${pageNumber}`
    );
    console.log(response);
    return response;
  } catch (error) {
    notify("Something went wrong", "error");
  }
};

export const uploadFile = async (
  uploadedFiles: any[],
  setUploadedProgress: any
) => {
  try {
    var form = new FormData();
    uploadedFiles.map((item) => {
      form.append("file", item);
    });

    const config = {
      onUploadProgress: (progressEvent: any) => {
        let percentageUploaded =
          (progressEvent?.loaded / progressEvent?.total) * 100;

        setUploadedProgress(percentageUploaded.toFixed(2));
      },
    };
    let response = await axiosInstance.post(
      `${BaseUrl}upload/upload_files`,
      form,
      config
    );

    if (response["status"] === 200) {
      notify(`${response?.data?.message}`, "success");
    }
  } catch (error) {
    notify(`Something Went Wrong : ${error}`, "error");
  }
};
