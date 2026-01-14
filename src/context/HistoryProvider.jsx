import { useEffect, useRef } from "react";
import { HistoryContext } from "./HistoryContext";
import { useLocation } from "react-router-dom";

export const HistoryProvider = ({ children }) => {
  const location = useLocation();
  const previousPathRef = useRef(null);

  useEffect(() => {
    previousPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <HistoryContext.Provider value={previousPathRef.current}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
