import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px" display="flex">
      <Box
        marginRight="1.5rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          alt="profile-user"
          width="80px"
          height="80px"
          src={`../../assets/user.jpeg`}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Box>
      <Box>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
