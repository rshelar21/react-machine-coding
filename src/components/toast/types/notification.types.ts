export interface INotification {
  title: string;
  message: string;
  duration: number;
  animation: string;
  type: "success" | "error" | "info" | "warning";
  position: TNotificationPosition;
  id?: string
}

export type TNotificationPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";
