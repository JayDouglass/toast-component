import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onRemove }) {
  return (
    <ol className={styles.wrapper}>
      {toasts?.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast {...toast} onDismiss={onRemove} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
