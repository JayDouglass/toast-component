import React from "react";

import Toast from "../Toast";
import { useToasts } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = useToasts();

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts?.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast {...toast} onDismiss={removeToast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
