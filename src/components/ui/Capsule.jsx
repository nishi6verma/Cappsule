const Capsule = ({ variant, disabled, onClick, text }) => {
  return (
    <button
      disabled={disabled}
      className={`px-3 rounded-lg font-semibold text-sm
        ${
          variant === "selected" &&
          "bg-primary custom-shadow-capsule border border-black"
        }
        ${variant === "primary" && "border-2 border-slate-300 text-gray-500"}
        ${
          variant === "dashed" && "bg-white border-2 border-dashed text-gray-500"
        }
        ${variant === "dashedSelected" &&"bg-white border-2 border-gray-500 border-dashed text-black"}`}
      onClick={onClick}
    >
      {text || "Not available"}
    </button>
  );
};

export default Capsule;
