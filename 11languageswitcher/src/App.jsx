import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChangeContextProvider from "./context/ChangeContextProvider";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChangeContextProvider>
        <Home />
      </ChangeContextProvider>
    </>
  );
}

export default App;
