import axios from "axios";
import React, { useEffect, useState } from "react";

export const Fetch = (url) => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);
  const [erro, setError] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((data) => setData(data.data))
      .catch((err) => setError("errored",err))
      .finally(() => setLoad(false));
  }, [url]);

  return { data, erro, load };
};
