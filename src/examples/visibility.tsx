import React from "react";

function Visibility() {
  return (
    <>
      <h2>Visibility examples</h2>

      <div class="grid grid-cols-3 gap-4">
        <div>01</div>
        <div class="invisible ...">02</div>
        <div>03</div>
      </div>
    </>
  );
}

export default Visibility;
