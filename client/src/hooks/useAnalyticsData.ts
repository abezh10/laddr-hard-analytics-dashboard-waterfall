import { useState } from "react";

const initialState = {
  status: "idle",
  updatedAt: null,
};

export function useAnalyticsData() {
  const [state, setState] = useState(initialState);

  return {
    state,
    markTouched() {
      setState({
        status: "ready",
        updatedAt: new Date().toISOString(),
      });
    },
  };
}

export default useAnalyticsData;
