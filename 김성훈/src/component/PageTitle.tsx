const PageTitle = () => {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <div className="flex min-w-72 flex-col gap-3">
        <p className="text-[32px] font-bold text-[#121317]">팀 출근 현황</p>
        <p className="text-sm text-[#676c83]">팀원들의 출근 상태를 확인하세요.</p>
      </div>
    </div>
  );
};

export default PageTitle;
