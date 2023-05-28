import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Tab,
  Tabs,
} from "@mui/material";
import PropTypes from "prop-types";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ReactSpeedometer from "react-d3-speedometer";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Good Morning Oguz"
          subtitle="Here are your stats for 28th May 2023."
        />

        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$32,621,72"
            subtitle="Total Revenue"
            progress="433 Orders"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="484,205"
            subtitle="Subscribers"
            progress="$56 Average Order"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="552,553"
            subtitle="Conversations"
            progress="Average Response Time"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="25%"
            subtitle="Pop-up Conversion Rate"
            progress="5% Sales Conversion rate"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 16"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab
                label={
                  <Typography
                    variant="h6"
                    fontWeight="200"
                    color={colors.grey[100]}
                  >
                    Automations
                  </Typography>
                }
                {...a11yProps(0)}
              />
              <Tab
                label={
                  <Typography
                    variant="h6"
                    fontWeight="200"
                    color={colors.grey[100]}
                  >
                    Campaigns
                  </Typography>
                }
                {...a11yProps(1)}
              />
              <Tab
                label={
                  <Typography
                    variant="h6"
                    fontWeight="200"
                    color={colors.grey[100]}
                  >
                    Segments
                  </Typography>
                }
                {...a11yProps(2)}
              />
              <Tab
                label={
                  <Typography
                    variant="h6"
                    fontWeight="200"
                    color={colors.grey[100]}
                  >
                    Last Month
                  </Typography>
                }
                {...a11yProps(3)}
              />
              <Tab
                label={
                  <Typography
                    variant="h6"
                    fontWeight="200"
                    color={colors.grey[100]}
                  >
                    Segment
                  </Typography>
                }
                {...a11yProps(4)}
              />
            </Tabs>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <TabPanel value={value} index={i}>
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box display="flex">
                  <Box>
                    <AddShoppingCartIcon
                      sx={{
                        fontSize: "40px",
                      }}
                    />
                  </Box>
                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography
                      color={colors.greenAccent[500]}
                      variant="h5"
                      fontWeight="600"
                      marginBottom="0.5rem"
                    >
                      Abandoned Cart 7 Days
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      4024 Sent | 124 Clicks
                    </Typography>
                  </Box>
                </Box>
                <Box p="5px 10px" textAlign="right">
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                    marginBottom="0.5rem"
                  >
                    ${transaction.cost}
                  </Typography>
                  <Box color={colors.grey[100]}>41 Orders | $50 Advance</Box>
                </Box>
              </Box>
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box display="flex">
                  <Box>
                    <AddShoppingCartIcon
                      sx={{
                        fontSize: "40px",
                      }}
                    />
                  </Box>
                  <Box sx={{ marginLeft: "5px" }}>
                    <Typography
                      color={colors.greenAccent[500]}
                      variant="h5"
                      fontWeight="600"
                      marginBottom="0.5rem"
                    >
                      Abandoned Cart 7 Days
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      4024 Sent | 124 Clicks
                    </Typography>
                  </Box>
                </Box>
                <Box p="5px 10px" textAlign="right">
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                    marginBottom="0.5rem"
                  >
                    ${transaction.cost}
                  </Typography>
                  <Box color={colors.grey[100]}>41 Orders | $50 Advance</Box>
                </Box>
              </Box>
            </TabPanel>
          ))}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Box align="center">
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
              align="center"
            >
              Level 5
            </Typography>
            <Typography
              variant="h5"
              fontWeight="200"
              color={colors.grey[100]}
              align="center"
              marginTop="0.5rem"
            >
              $32,050 in the last 2 months
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            {/* <ProgressCircle size="125" /> */}
            <ReactSpeedometer
              maxValue={500}
              value={300}
              needleColor={colors.greenAccent[600]}
              startColor={colors.greenAccent[600]}
              segments={1}
              ringWidth={30}
              endColor={colors.greenAccent[600]}
              needleHeightRatio={0.4}
              valueTextFontSize="25px"
              valueTextFontWeight="400"
              textColor={colors.greenAccent[600]}
            />
            {/* <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
