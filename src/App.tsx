import React from "react";
import "./App.css";
import AspectRatio from "./examples/aspectRatio";
import Columns from "./examples/columns";
import BreakAfter from "./examples/break-after";
import BreakBefore from "./examples/break-before";
import BoxDecorationBreak from "./examples/box-decoration-break";
import BreakInside from "./examples/break-inside";

function App() {
  return (
    <>
      <div>
        <AspectRatio />
        <Columns />
        <BreakAfter />
        <BreakBefore />
        <BoxDecorationBreak />
        <BreakInside />
      </div>
    </>
  );
}

export default App;
