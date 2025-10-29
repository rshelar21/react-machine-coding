import type { INotification } from "../types/notification.types";

export const Notification = ({
  message,
  title,
  type,
  onClose,
  id,
  animation
}: INotification & {
  onClose: (id: string) => void;
}) => {
  return (
    <div className={`${type} notification__popup ${animation}`}>
      <div>
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
      <button
        className="notification__button"
        onClick={() => id && onClose(id)}
      >
        ❌
      </button>
    </div>
  );
};
