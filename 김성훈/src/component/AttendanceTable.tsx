const AttendanceTable = () => {
  const rows = [
    { name: "지수 김", dept: "개발팀", role: "팀 리드", in: "09:00", out: "18:00", hours: "8시간" },
    { name: "민준 박", dept: "개발팀", role: "개발자", in: "09:05", out: "18:05", hours: "8시간" },
    { name: "서연 이", dept: "개발팀", role: "개발자", in: "09:10", out: "18:10", hours: "8시간" },
  ];

  return (
    <div className="px-4 py-3">
      <div className="overflow-hidden rounded-xl border border-[#dddee4] bg-white">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-[#121317]">
              <th className="px-4 py-3 w-[200px]">이름</th>
              <th className="px-4 py-3 w-[200px]">부서</th>
              <th className="px-4 py-3 w-[200px]">직책</th>
              <th className="px-4 py-3 w-[200px]">출근 시간</th>
              <th className="px-4 py-3 w-[200px]">퇴근 시간</th>
              <th className="px-4 py-3 w-[200px]">근무 시간</th>
              <th className="px-4 py-3 w-[100px]">상태</th>
              <th className="px-4 py-3 w-[100px] text-[#676c83]">근태 수정</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-[#dddee4] text-sm text-[#676c83]">
                <td className="px-4 py-2">{r.name}</td>
                <td className="px-4 py-2">{r.dept}</td>
                <td className="px-4 py-2">{r.role}</td>
                <td className="px-4 py-2">{r.in}</td>
                <td className="px-4 py-2">{r.out}</td>
                <td className="px-4 py-2">{r.hours}</td>
                <td className="px-4 py-2">
                  <button className="h-8 px-4 rounded-full bg-[#f1f1f4] text-[#121317] font-medium">정상</button>
                </td>
                <td className="px-4 py-2 font-bold text-[#676c83]">수정</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;
