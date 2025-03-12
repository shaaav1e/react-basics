import React, { useState, useEffect } from "react";

const FetchComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetching() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const result = await response.json();
        // console.log("Fetched Data:", result);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetching();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <h1 className="text-center font-bold mt-3">Fetching data from API</h1>
      <hr></hr>
      {data ? (
        <div className="text-center mt-3">
          <h2>{data?.title}</h2>
        </div>
      ) : (
        "Fetching..."
      )}
    </div>
  );
};

export default FetchComponent;

// useEffect(() => {
//   async function fetching() {
//     try {
//       setLoading(true);
//       const response = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then(resolve)
//             .catch(reject);
//         }, 2000); // 2 seconds timeout
//       });
//       const result = await response.json();
//       // console.log("Fetched Data:", result);
//       setData(result);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
//   fetching();
// }, []);
