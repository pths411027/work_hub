import {
  Box, Paper, Grid, useMediaQuery, Typography,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

function ReportPage() {
  const { reportName } = useParams();
  return (
    <Box
      sx={{
        height: 810,
        width: '100%',
        padding: '1%',
        display: 'flex',
        justifyContent: '',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h4">
        {reportName}
      </Typography>
    </Box>

  );
}

export default ReportPage;
