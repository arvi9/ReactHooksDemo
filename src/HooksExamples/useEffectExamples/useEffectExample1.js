import React, { useState, useEffect } from "react";

function useEffectExample1() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  console.log("Page Loaded");

  useEffect(() => {
    //this is executed when component Mounts
    console.log("Resource Changed");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    //Clean up or un Subscribe -- This is called when the componet unMounts
    return () => {
      console.log("Return from resource change");
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default useEffectExample1;
