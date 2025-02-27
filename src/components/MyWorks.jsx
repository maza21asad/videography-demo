import React, { useState } from "react";

const MyWorks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>My Works</h1>
      <p>Here are some of my projects.</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default MyWorks;
