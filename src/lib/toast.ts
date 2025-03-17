import { toast } from "sonner";
import { MouseEvent } from "react";

type ToastType = "default" | "success" | "error" | "warning" | "info";

interface ActionButton {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface ToastOptions {
  id?: string;
  icon?: React.ReactNode;
  duration?: number;
  action?: ActionButton;
  description?: string;
  cancel?: ActionButton;
}

export const showToast = (
  message: string,
  type: ToastType = "default",
  options: ToastOptions = {}
) => {
  const { id, icon, duration, action, description, cancel } = options;

  const toastOptions = {
    id,
    icon,
    duration,
    action,
    description,
    cancel,
  };

  switch (type) {
    case "success":
      toast.success(message, toastOptions);
      break;
    case "error":
      toast.error(message, toastOptions);
      break;
    case "warning":
      toast.warning(message, toastOptions);
      break;
    case "info":
      toast.info(message, toastOptions);
      break;
    default:
      toast(message, toastOptions);
  }
};
