import React from "react";
import "./App.css";
import AspectRatio from "./examples/aspectRatio";
import Columns from "./examples/columns";
import BreakAfter from "./examples/break-after";
import BreakBefore from "./examples/break-before";

function App() {
  return (
    <>
      <div>
        <AspectRatio />
        <Columns />
        <BreakAfter />
        <BreakBefore />
      </div>
    </>
  );
}

export default App;
