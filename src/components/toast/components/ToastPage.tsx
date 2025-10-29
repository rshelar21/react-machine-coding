import { useNotifications } from "../hooks/useNotifications";
import "../style.css";

export const ToastPage = () => {
  const { NotificationComponent, handleTriggerNotification } =
    useNotifications();
  return (
    <div>
      {NotificationComponent}

      <div className="notification__page">
        <button
          onClick={() =>
            handleTriggerNotification({
              title: "this is title",
              message: "custom message",
              animation: "popup",
              duration: 2000,
              type: "success",
              position: "top-left",
            })
          }
        >
          top-left
        </button>
        <button
          onClick={() =>
            handleTriggerNotification({
              title: "this is title",
              message: "custom message",
              animation: "fadeIn",
              duration: 2000,
              type: "error",
              position: "top-right",
            })
          }
        >
          top-right
        </button>
        <button
          onClick={() =>
            handleTriggerNotification({
              title: "this is title",
              message: "custom message",
              animation: "slideIn",
              duration: 2000,
              type: "info",
              position: "bottom-left",
            })
          }
        >
          bottom-left
        </button>
        <button
          onClick={() =>
            handleTriggerNotification({
              title: "this is title",
              message: "custom message",
              animation: "pop",
              duration: 2000,
              type: "warning",
              position: "bottom-right",
            })
          }
        >
          bottom-right
        </button>
      </div>
    </div>
  );
};
