// AdminAttendancePage.tsx

import Header from "../component/Header";
import PageTitle from "../component/PageTitle";
import TabMenu from "../component/TabMenu";
import SearchBar from "../component/SearchBar";
import AttendanceTable from "../component/AttendanceTable";
import Filters from "../component/Filters";

const AdminAttendancePage = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <PageTitle />
            <TabMenu />
            <Filters />
            <SearchBar />
            <AttendanceTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAttendancePage;
