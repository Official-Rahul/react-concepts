import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus(); // Access DOM node directly
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
