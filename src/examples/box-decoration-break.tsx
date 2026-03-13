import React from "react";

function BoxDecorationBreak() {
  return (
    <div className="mt-4 bg-amber-700 p-4 space-y-6">
      <h2 className="text-xl font-bold text-white">
        Box decoration break Examples
      </h2>

      <div>
        <span className="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
          Hello
          <br />
          World
        </span>
        <span className="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
          Hello
          <br />
          World
        </span>
      </div>
    </div>
  );
}

export default BoxDecorationBreak;
