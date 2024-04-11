import { useState } from "react";

export const useFetching = (cb) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const tryFetch = async (...args) => {
    try {
      setIsLoading(true);
      await cb(...args);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [tryFetch, isLoading, error];
};
