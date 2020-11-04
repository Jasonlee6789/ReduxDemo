import React, { useState, useRef, useEffect } from "react";

function useRefDemo() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value = "hello,lijing";
    console.log(inputEl);
  };
  const [text, setText] = useState("lijing");
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text;
    console.log("textRef.current:", textRef.current);
  });

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br />
      <br />
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}

export default useRefDemo;
