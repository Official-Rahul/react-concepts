import { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    console.log("Listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Listener removed");
    };
  }, []); // run once on mount and cleanup on unmount

  return (
    <>
      <h3>Clean up Callback</h3>
      <p>Window width: {width}px</p>
    </>
  );
}

export default WindowSize;
