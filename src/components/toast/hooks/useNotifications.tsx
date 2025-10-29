import { useState, useCallback } from "react";
import { Notification } from "../components/Notification";
import type { INotification } from "../types/notification.types";
import { v4 as uuidv4 } from "uuid";

export const useNotifications = () => {
  const [notification, setNotification] = useState<INotification[]>([]);

  const handleTriggerNotification = useCallback((data: INotification) => {
    const toastId = uuidv4();
    setNotification((prev) => {
      return [
        ...prev,
        {
          ...data,
          id: toastId,
        },
      ];
    });
    setTimeout(() => {
      setNotification((prev) => {
        return prev.filter((item) => item.id !== toastId);
      });
    }, data?.duration);
  }, []);

  const handleClose = (idx: string) => {
    setNotification((prev) => {
      return prev.filter((item) => item.id !== idx);
    });
  };

  const NotificationComponent = notification ? (
    <div>
      {notification.map((item) => (
        <div className={`${item.position}`}>
          <Notification {...item} onClose={handleClose} />
        </div>
      ))}
    </div>
  ) : null;

  return {
    handleTriggerNotification,
    NotificationComponent,
  };
};
