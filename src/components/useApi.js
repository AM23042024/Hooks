import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const controllerRef = useRef(null);

  const fetchData = async (search) => {
    try {
      setIsLoading(true);
      controllerRef.current = new AbortController();
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?search=${search}`,
        {
          signal: controllerRef.current.signal,
        }
      );
      setData(response.data);
      setError(null);
    } catch (error) {
      if (error.name !== "CanceledError") {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const cancelRequest = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  };

  useEffect(() => {
    return () => {
      cancelRequest();
    };
  }, []);

  return { fetchData, cancelRequest, data, error, isLoading };
};

export default useApi;
