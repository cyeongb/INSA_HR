// components/attendance/MyAttendanceTable.tsx

import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from '@mui/material';

const attendanceData = [
  { date: '2024-07-22', in: '09:00 AM', out: '06:00 PM', total: '9 시간', status: '출근' },
  { date: '2024-07-23', in: '09:05 AM', out: '06:05 PM', total: '9 시간', status: '출근' },
  { date: '2024-07-24', in: '08:55 AM', out: '05:55 PM', total: '9 시간', status: '출근' },
  { date: '2024-07-25', in: '09:02 AM', out: '06:02 PM', total: '9 시간', status: '출근' },
  { date: '2024-07-26', in: '09:00 AM', out: '06:00 PM', total: '9 시간', status: '출근' },
];

function MyAttendanceTable() {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        근태 현황
      </Typography>

      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>날짜</TableCell>
              <TableCell>출근 시간</TableCell>
              <TableCell>퇴근 시간</TableCell>
              <TableCell>총 근무 시간</TableCell>
              <TableCell>상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.in}</TableCell>
                <TableCell>{row.out}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>
                  <Chip label={row.status} color="default" variant="outlined" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MyAttendanceTable;
