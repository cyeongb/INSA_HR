// pages/MyAttendancePage.tsx

import React from 'react';
import { Box } from '@mui/material';
import MyAnnualInfo from '../components/attendance/MyAnnualInfo';
import MyAttendanceTable from '../components/attendance/MyAttendanceTable';

function MyAttendancePage() {
  return (
    <Box sx={{ px: 2 }}>
      <MyAnnualInfo />
      <MyAttendanceTable />
    </Box>
  );
}

export default MyAttendancePage;