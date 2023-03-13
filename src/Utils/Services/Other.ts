import { BaseUrl } from "./../Data/config";
import { notify } from "./notification";

export function getGitHubUrl(from: string) {
  const rootURl = "https://github.com/login/oauth/authorize";

  const options = {
    client_id: import.meta.env.VITE_APP_GITHUB_OAUTH_CLIENT_ID as string,
    redirect_uri: import.meta.env.VITE_APP_GITHUB_OAUTH_REDIRECT_URL as string,
    scope: "user:email",
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootURl}?${qs.toString()}`;
}

export function getCookieValue(key: string) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

export const bytesToString = (bytes: number) => {
  // function takes in bytes and returns corresponding string value with suitable Prefix (KB,MB,GB)
  let incrementor = 0;
  let size = bytes;
  do {
    incrementor++;
    size = size / 1024;
  } while (size >= 1024);

  let prefix = "";
  incrementor === 0 && (prefix = "B");
  incrementor === 1 && (prefix = "KB");
  incrementor === 2 && (prefix = "MB");
  incrementor === 3 && (prefix = "GB");

  return size.toFixed(2) + " " + prefix;
};

export const copyToClipboard = (text: string) => {
  // Allows user to copy the given text on clipboard
  navigator.clipboard.writeText(text);
  notify("Copied To Clipboard", "success");
};

export const getCarLink = (fileID: string) => {
  return `${BaseUrl}download/download_car?fileId=${fileID}.car`;
};

export const downloadFileFromURL = async (
  url: string,
  filename = "untitled"
) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.click();
};

export const clipText = (text: string, limit: number, subStringLength = 6) => {
  let returntext = text;
  if (text?.length > limit) {
    returntext =
      text.substring(0, subStringLength) +
      "...." +
      text.substring(text.length - subStringLength);
  }

  return returntext;
};
