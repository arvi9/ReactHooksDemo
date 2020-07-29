import React, { useState, useEffect } from "react";

function useEffectExample1() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("render");
  });

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default useEffectExample1;
