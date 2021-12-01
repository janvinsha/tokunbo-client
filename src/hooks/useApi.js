import React, { useState } from "react";
const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);

    const response = await apiFunc(...args);
    setTimeout(() => setLoading(false), 3000);
    setError(!response.ok);
    setTimeout(() => setData(response.data), 3000);
    return response;
  };

  return { data, error, loading, request };
};

export default useApi;
