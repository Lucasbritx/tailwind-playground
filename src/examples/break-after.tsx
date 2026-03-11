import React from "react";

function BreakAfter() {
  return (
    <div className="mt-4 bg-amber-700 p-4 space-y-6">
      <h2 className="text-xl font-bold text-white">Break After Examples</h2>

      <div>
        <h3 className="text-white mb-2">Without break-after-column:</h3>
        <div className="columns-2 gap-4 bg-amber-900 p-3">
          <p className="bg-blue-500 p-2 mb-2">
            Paragraph 1 - This is some text content.
          </p>
          <p className="bg-green-500 p-2 mb-2">Paragraph 2 - More text here.</p>
          <p className="bg-red-500 p-2 mb-2">Paragraph 3 - Even more text.</p>
          <p className="bg-purple-500 p-2 mb-2">Paragraph 4 - Final text.</p>
        </div>
      </div>

      <div>
        <h3 className="text-white mb-2">
          With break-after-column on Paragraph 1:
        </h3>
        <div className="columns-2 gap-4 bg-amber-900 p-3">
          <p className="bg-blue-500 p-2 mb-2 break-after-column">
            Paragraph 1 - forces a column break after this element.
          </p>
          <p className="bg-green-500 p-2 mb-2">
            Paragraph 2 - Starts in the next column.
          </p>
          <p className="bg-red-500 p-2 mb-2">Paragraph 3 - Even more text.</p>
          <p className="bg-purple-500 p-2 mb-2">Paragraph 4 - Final text.</p>
        </div>
      </div>
    </div>
  );
}

export default BreakAfter;
