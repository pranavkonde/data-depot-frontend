import axios from "axios";
import { notify } from "./notification";
import { BaseUrl } from "../Data/config";
import axiosInstance from "./AxiosInterceptor";

export const getUploads = async (pageNumber = 1) => {
  try {
    let response = await axios.get(
      `${BaseUrl}data/get_user_uploads?pageNo=${pageNumber}`
    );
    console.log(response);
    return response;
  } catch (error) {
    notify("Something went wrong", "error");
  }
};

export const uploadFile = async () => {};

// export const uploadFile = async (uploadedFile, setUploadProgress) => {
//   uploadedFile.persist();
//   let network = currentWeb3AuthChain;
//   if (network) {
//     try {
//       let balance = await getBalance();
//       if (+balance?.dataUsed < +balance?.dataLimit) {
//         currentProgressFunction = setUploadProgress;
//         const deploy_response = await lighthouse.upload(
//           uploadedFile,
//           getAccessToken(),
//           progressCallback
//         );
//         notify(
//           `File Upload Success:  ${clipText(deploy_response?.data?.Hash, 10)}`,
//           "success"
//         );
//         setUploadProgress(0);
//       } else {
//         setUploadProgress(0);
//         notify(`Free Data Usage Exeeded `, "error");
//       }
//     } catch (e) {
//       notify(`ERROR:${e}`, "error");
//       setUploadProgress(0);
//     }
//   } else {
//     notify(`Please connect to a supported network`, "error");
//   }
// };
