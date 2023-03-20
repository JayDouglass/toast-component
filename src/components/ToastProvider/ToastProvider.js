import React from "react";

export const ToastsContext = React.createContext([]);

export const useToasts = () => {
  const context = React.useContext(ToastsContext);

  return context;
};

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

  // https://kentcdodds.com/blog/how-to-use-react-context-effectively
  // https://courses.joshwcomeau.com/joy-of-react/04-component-design/08.06-context-performance
  // https://kentcdodds.com/blog/how-to-optimize-your-context-value
  const value = React.useMemo(() => {
    return {
      toasts,
      addToast,
      removeToast,
      removeAll,
    };
  }, [toasts, addToast, removeToast, removeAll]);

  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
}

export default ToastProvider;
