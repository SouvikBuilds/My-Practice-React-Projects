import React, { useState } from "react";
import ChangeContext from "./ChangeContext";

const ChangeContextProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState(null);
  const toggleBgColor = () => {
    setBgColor(bgColor === "light" ? "dark" : "light");
  };
  return (
    <div>
      <ChangeContext.Provider value={{ bgColor, toggleBgColor }}>
        <div className={bgColor === "dark" ? "dark" : ""}>{children}</div>
      </ChangeContext.Provider>
    </div>
  );
};

export default ChangeContextProvider;
