import React from "react";
import { useState } from "react";

const Options = ({ category, options }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex gap-4">
      <div>Form:</div>
      <div className="flex flex-wrap gap-1">
        {showMore ? options : options.slice(0, 3)}
        {options.length > 3 && (
          <button
            className="text-[#264c76] font-semibold"
            onClick={() => {
              setShowMore((prev) => !prev);
            }}
          >
            {showMore ? "hide.." : "more.."}
          </button>
        )}
      </div>
    </div>
  );
};

export default Options;
