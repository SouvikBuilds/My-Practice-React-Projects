import React, { useContext } from "react";
import ChangeContext from "../context/ChangeContext";
import ChangeContextProvider from "../context/ChangeContextProvider";

const Home = () => {
  const translations = {
    en: { welcome: "Welcome", login: "Please Login" },
    hi: { welcome: "स्वागत है", login: "कृपया लॉगिन करें" },
  };

  const { language, toggleLanguage } = useContext(ChangeContext);
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-black rounded-lg p-5 shadow-lg w-[40vw] mx-auto my-auto mt-[5%]">
      <h2 className="text-white text-[20px]">
        {translations[language].welcome}
      </h2>
      <p className="text-white text-[20px]">{translations[language].login}</p>
      <button
        onClick={toggleLanguage}
        className="text-white px-4 py-2 rounded-lg shadow-lg bg-red-500 active:bg-red-600 duration-300 cursor-pointer"
      >
        Change Language
      </button>
    </div>
  );
};

export default Home;
