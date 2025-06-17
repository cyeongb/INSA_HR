import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import MyAttendancePage from '../../pages/MyAttendancePage';
import TeamAttendancePage from '../../pages/TeamAttendancePage';

function AttendanceTabs() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="standard"
        sx={{
          mb: 4, // 탭 아래 마진 크게
          '.MuiTabs-flexContainer': {
            justifyContent: 'flex-start',
          },
        }}
      >
        <Tab label="내 근태" />
        <Tab label="팀 근태 관리" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {tabIndex === 0 && <MyAttendancePage />}
        {tabIndex === 1 && <TeamAttendancePage />}
      </Box>
    </Box>
  );
}

export default AttendanceTabs;
