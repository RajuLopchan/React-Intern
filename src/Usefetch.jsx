import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => {
        console.error('Error fetching data:', err);
        setData(null);
      });
  }, [url]);

  return data;
}

export default useFetch;
