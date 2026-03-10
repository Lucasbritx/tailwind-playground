import React from "react";

function AspectRatio() {
  return (
    <>
      <h2>Aspect Ratio examples</h2>
      <img
        className="aspect-3/2 object-cover"
        src="https://cdn6.campograndenews.com.br/uploads/noticias/2020/12/28/b71ep5frphnc.jpg"
      />

      <iframe
        className="aspect-video ..."
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      ></iframe>

      <iframe
        className="aspect-video md:aspect-square ..."
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      ></iframe>

      {/* Custom values */}
      <img
        className="aspect-[calc(4*3+1)/3]"
        src="https://cdn6.campograndenews.com.br/uploads/noticias/2020/12/28/b71ep5frphnc.jpg"
      />
    </>
  );
}

export default AspectRatio;
