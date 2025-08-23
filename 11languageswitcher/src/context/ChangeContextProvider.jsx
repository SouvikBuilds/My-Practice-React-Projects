import React, { useState } from "react";
import ChangeContext from "./ChangeContext";

const ChangeContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };
  return (
    <div>
      <ChangeContext.Provider value={{ language, toggleLanguage }}>
        {children}
      </ChangeContext.Provider>
    </div>
  );
};

export default ChangeContextProvider;
