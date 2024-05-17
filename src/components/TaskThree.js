import React, { useState, useEffect } from "react";
import useApi from "./useApi";

const TaskThree = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { fetchData, cancelRequest } = useApi();

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchDataWithDebounce = () => {
      setIsLoading(true);
      fetchData(query)
        .then((data) => {
          setResults(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    };

    const debounceTimeout = setTimeout(fetchDataWithDebounce, 500);

    return () => {
      clearTimeout(debounceTimeout);
      cancelRequest();
    };
  }, [query, cancelRequest, fetchData]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="TaskThree">
      <input type="text" value={query} onChange={handleChange} />
      {isLoading && <p>Loading...</p>}
      {results.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
};

export default TaskThree;
