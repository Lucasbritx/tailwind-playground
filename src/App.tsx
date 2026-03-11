import React from "react";
import "./App.css";
import AspectRatio from "./examples/aspectRatio";
import Columns from "./examples/columns";

function App() {
  return (
    <>
      <div className="space-y-10">
        <AspectRatio />
        <Columns />
      </div>
    </>
  );
}

export default App;
