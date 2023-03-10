import { notify } from "./notification";
import axios from "axios";
import Navigator from "../GlobalNavigation/navigationHistory";

export async function login(code: string) {
  try {
    const response = await axios.get(
      `https://data.lighthouse.storage/api/auth/oauth/github?code=${code}`
    );
    if (response?.status === 200) {
      let todayDate = new Date();
      const expirationDate = todayDate.setDate(todayDate.getDate() + 7);
      localStorage.setItem(
        "authData",
        JSON.stringify({
          expirationDate: expirationDate,
          accessToken: response?.data?.access_token,
          loginType: "Github",
        })
      );
      Navigator.push("/dashboard");
    }
  } catch (error) {
    notify(`Error:Something went Wrong`, "error");
    logout();
  }
}

export function isLogin() {
  let authData = JSON.parse(localStorage.getItem("authData") || "{}");
  if (authData?.["expirationDate"] && authData?.["accessToken"]) {
    let currentDate = new Date();
    let expirationDate = new Date(authData?.["expirationDate"]);
    return expirationDate.getTime() > currentDate.getTime() ? true : false;
  } else {
    logout();
    return false;
  }
}

export async function logout() {
  localStorage.removeItem("authData");
  Navigator.push("/");
}
