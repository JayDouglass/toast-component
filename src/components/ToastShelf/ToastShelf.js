import React from "react";

import Toast from "../Toast";
import { ToastsContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastsContext);

  return (
    <ol className={styles.wrapper}>
      {toasts?.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast {...toast} onDismiss={removeToast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
