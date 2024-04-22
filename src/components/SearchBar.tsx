

const SearchBar = () => {
  return (
    <div className="relative hidden md:block">
      <input
        type="text"
        id="search-navbar"
        className="block w-[350px] rounded-full  pl-4 pe-10  text-xs h-[50px] focus:outline-none text-[#585858]   "
        placeholder="Search For Properties, Developers, Banks"
      />

      <div className="absolute inset-y-0 end-2  flex items-center pe-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-[#335F32]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
    </div>
  );
}

export default SearchBar