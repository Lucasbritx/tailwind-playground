import React from "react";
import "./App.css";
import AspectRatio from "./examples/aspectRatio";
import Columns from "./examples/columns";
import BreakAfter from "./examples/break-after";

function App() {
  return (
    <>
      <div>
        <AspectRatio />
        <Columns />
        <BreakAfter />
      </div>
    </>
  );
}

export default App;
