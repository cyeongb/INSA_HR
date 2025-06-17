const SearchBar = () => {
  return (
    <div className="px-4 py-3">
      <label className="flex flex-col min-w-40 h-12 w-full">
        <div className="flex h-full w-full items-center rounded-xl bg-[#f1f1f4]">
          <div className="pl-4 text-[#676c83]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72Z" />
            </svg>
          </div>
          <input
            placeholder="팀원 검색"
            className="form-input flex-1 border-none bg-[#f1f1f4] px-4 text-base text-[#121317] placeholder:text-[#676c83] focus:outline-none"
          />
        </div>
      </label>
    </div>
  );
};

export default SearchBar;
