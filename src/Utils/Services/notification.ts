import { toast, ToastOptions } from "react-toastify";

export const notify = (
  msg: string,
  msg_type: "error" | "success" | "info"
): void => {
  const config: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  };

  if (window.innerWidth < 600) {
    config.position = "bottom-center";
  }

  switch (msg_type) {
    case "error":
      toast.error(msg, config);
      break;
    case "success":
      toast.success(msg, config);
      break;
    case "info":
      toast.info(msg, config);
      break;
    default:
      break;
  }
};
