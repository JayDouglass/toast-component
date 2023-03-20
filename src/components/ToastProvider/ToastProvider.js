import React from "react";

export const ToastsContext = React.createContext([]);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((toast) => {
    const uniqueToast = {
      id: Date.now(),
      ...toast,
    };
    setToasts((toasts) => [...toasts, uniqueToast]);
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  const removeAll = React.useCallback((id) => {
    setToasts([]);
  }, []);

  const value = React.useMemo(() => {
    return {
      toasts,
      addToast,
      removeToast,
      removeAll,
    };
  }, [toasts, addToast, removeToast, removeAll]);

  return <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>;
}

export default ToastProvider;
