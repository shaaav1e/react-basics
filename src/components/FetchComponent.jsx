import React, { useState, useEffect } from "react";

const FetchComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const result = await response.json();
        console.log("Fetched Data:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetching();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>{data?.title}</h2>
        </div>
      ) : (
        "Fetching..."
      )}
    </div>
  );
};

export default FetchComponent;
