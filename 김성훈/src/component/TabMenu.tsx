const TabMenu = () => {
  return (
    <div className="pb-3">
      <div className="flex border-b border-[#dddee4] px-4 gap-8">
        {["개요", "내 근태", "팀 근태"].map((tab, i) => (
          <a
            key={tab}
            href="#"
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 text-sm font-bold tracking-[0.015em] ${
              i === 1 ? "border-b-[3px] border-[#121317] text-[#121317]" : "border-b-[3px] border-transparent text-[#676c83]"
            }`}
          >
            <p>{tab}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
