import { FaMagnifyingGlass } from "react-icons/fa6";
const Searchbox = ({ query, setQuery, searchQuery }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 ">
      <div className="w-3/5 relative h-fit">
        <h1 className="text-base absolute left-5 text-zinc-600 font-bold top-1/3">
          <FaMagnifyingGlass />
        </h1>
        <input
          className="custom-shadow w-full py-4 text-sm rounded-3xl pl-14 pr-24"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDownCapture={(e) => {
            if (e.key === "Enter") {
              searchQuery();
            }
          }}
          placeholder="Type your medecine name here"
        ></input>
        <button
          onClick={() => {
            searchQuery();
          }}
          className="absolute right-5 top-1/4 text-[#264c76] font-bold"
        >
          Search
        </button>
      </div>
      {/* <div className="w-full h-1 mx-20 bg-black"/> */}

    </div>
  );
};

export default Searchbox;
