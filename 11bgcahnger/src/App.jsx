import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChangeContextProvider from "./context/ChangeContextProvider";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ChangeContextProvider>
              <ThemeBtn />
              <Card />
            </ChangeContextProvider>
          </div>

          <div className="w-full max-w-sm mx-auto"></div>
        </div>
      </div>
    </>
  );
}

export default App;
