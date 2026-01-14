import { useContext } from "react";
import { HistoryContext } from "./HistoryContext";

export const usePreviousPath = () => {
  return useContext(HistoryContext);
};
