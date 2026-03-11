import React from "react";

const MOUNTAINS_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/500px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg";

function Columns() {
  return (
    <>
      <h2>Columns examples</h2>
      <div className="columns-2 gap-4 sm:columns-3 sm:gap-8">
        <img className="aspect-3/2" src={MOUNTAINS_IMAGE_URL} />
        <img className="aspect-square" src={MOUNTAINS_IMAGE_URL} />
        <img className="aspect-square" src={MOUNTAINS_IMAGE_URL} />
        <img className="aspect-3/2" src={MOUNTAINS_IMAGE_URL} />
        <img className="aspect-square" src={MOUNTAINS_IMAGE_URL} />
        <img className="aspect-square" src={MOUNTAINS_IMAGE_URL} />
      </div>
    </>
  );
}

export default Columns;
