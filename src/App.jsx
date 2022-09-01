import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import UseReducer from "./components/UseReducer";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<App />} />
    //     <Route path="/test" element={<Test />} />
    //   </Routes>
    // </BrowserRouter>
    //<UseEffectCleanUp/>
    <UseReducer/>
  );
}

export default App;
