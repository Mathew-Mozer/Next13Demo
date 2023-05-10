import React from "react";

const PostCount = ({ count }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "navy",
        color: "white",
        padding: "10px",
        borderRadius: "50px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginRight: "5px",
      }}
    >
      <h2 style={{ margin: "0", marginRight: "10px" }}>Post Count:</h2>
      <p style={{ margin: "0" }}>{count}</p>
    </div>
  );
};

export default PostCount;
