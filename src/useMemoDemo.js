import React, { useState } from "react";

function useMemoDemo() {
  const [xiaohong, setXiaohong] = useState("小红在待客状态");
  const [zhiling, setZhiling] = useState("志玲在待客状态");
  return (
    <div>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime());
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhiling(new Date().getTime() + "志玲向我们走来");
        }}
      >
        志玲
      </button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </div>
  );
}
function ChildComponent({ name, children }) {
  function changeXiaohong() {
    console.log("他来了");
    return name + ",小红向我们走来了";
  }
  const actionXiaohong = changeXiaohong(name);
  return (
    <div>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </div>
  );
}

export default useMemoDemo;
