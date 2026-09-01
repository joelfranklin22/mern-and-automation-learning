import { useEffect, useState } from "react";

function WindowResize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleSize = () => {
      setWidth(window.innerWidth);
    };
    handleSize();
    console.log("Listener Added console");

    window.addEventListener("resize", handleSize);
    return () => {
      console.log("Listener Removed");
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <>
      <h1>Windows Resize width:{width}</h1>
    </>
  );
}
export default WindowResize;
