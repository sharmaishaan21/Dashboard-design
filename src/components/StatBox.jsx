import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, increase, progress }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h6"
          fontWeight="300"
          sx={{ color: colors.greenAccent[600] }}
        >
          {progress}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
