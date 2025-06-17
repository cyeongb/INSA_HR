// pages/TeamAttendancePage.tsx

import React from 'react';
import { Typography, Box } from '@mui/material';

function TeamAttendancePage() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        팀 근태 관리
      </Typography>
      <Typography>부서: 삼성디스플레이 / 팀: 개발팀</Typography>
    </Box>
  );
}

export default TeamAttendancePage;
