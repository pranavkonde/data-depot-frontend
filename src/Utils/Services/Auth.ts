import axios from "axios";
import Navigator from "../GlobalNavigation/navigationHistory";

export function login(redirect = "/dashboard") {
  Navigator.push(redirect);
}

export function isLogin() {
  //   let authData = JSON.parse(localStorage.getItem("authData") || "{}");
  //   if (
  //     authData?.["userAddress"] &&
  //     authData?.["expirationDate"] &&
  //     authData?.["signedMessage"] &&
  //     authData?.["accessToken"]
  //   ) {
  //     let currentDate = new Date();
  //     let expirationDate = new Date(authData?.["expirationDate"]);
  //     return expirationDate.getTime() > currentDate.getTime() ? true : false;
  //   } else {
  //     // logout();
  //     return false;
  //   }

  return true;
}

export async function logout() {}
