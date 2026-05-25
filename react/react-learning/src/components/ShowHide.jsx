import { useState } from "react";

function ShowHide() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>I am learning React.</p>}
    </div>
  );
}   

export default ShowHide;