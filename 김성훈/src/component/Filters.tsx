// src/component/Filters.tsx

const Filters = () => {
  return (
    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
      <label className="flex flex-col min-w-40 flex-1">
        <input
          placeholder="부서 선택"
          className="form-input h-14 rounded-xl border border-[#dddee4] bg-white p-[15px] text-base text-[#121317] placeholder:text-[#676c83]"
        />
      </label>
      <label className="flex flex-col min-w-40 flex-1">
        <input
          placeholder="팀 선택"
          className="form-input h-14 rounded-xl border border-[#dddee4] bg-white p-[15px] text-base text-[#121317] placeholder:text-[#676c83]"
        />
      </label>
    </div>
  );
};

export default Filters;
