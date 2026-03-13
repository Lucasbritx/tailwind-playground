import React from "react";

function BreakInside() {
  return (
    <div className="mt-4 bg-amber-700 p-4 space-y-6">
      <h2 className="text-xl font-bold text-white">Break Inside Examples</h2>

      <div>
        <h3 className="text-white mb-2">
          With break-inside-column on Paragraph 2(same behavior as break-after
          in Paragraph 1):
        </h3>
        <div className="columns-2 gap-4 bg-amber-900 p-3">
          <p className="bg-blue-500 p-2 mb-2">Paragraph 1</p>
          <p className="bg-green-500 p-2 mb-2 break-inside-avoid-column">
            Paragraph 2 - forces a column break before this element.
          </p>
          <p className="bg-red-500 p-2 mb-2">Paragraph 3 - Even more text.</p>
          <p className="bg-purple-500 p-2 mb-2">Paragraph 4 - Final text.</p>
        </div>
      </div>
    </div>
  );
}

export default BreakInside;
