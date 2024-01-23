import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SportsMotorsportsOutlinedIcon from "@mui/icons-material/SportsMotorsportsOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  colors,
  Typography,
  Drawer,
} from "@mui/material";
import Animate from "./Animate";
import { images } from "../../assets";

const menu = [
  {
    title: "Inbox",
    icon: <MailOutlinedIcon />,
    state: "inbox",
  },
  {
    title: "Overview",
    icon: <DashboardCustomizeOutlinedIcon />,
    state: "overview",
  },
  {
    title: "Notification",
    icon: <NotificationsOutlinedIcon />,
    state: "notification",
  },
];

const serviceMenu = [
  {
    title: "Mortage",
    icon: <OtherHousesOutlinedIcon />,
    state: "mortage",
  },
  {
    title: "Car loans",
    icon: <DirectionsCarFilledOutlinedIcon />,
    state: "carloan",
  },
  {
    title: "Insurance",
    icon: <SportsMotorsportsOutlinedIcon />,
    state: "insurance",
  },
];

const investmentMenu = [
  {
    title: "Stock trade",
    icon: <SwapHorizOutlinedIcon />,
    state: "stocktrade",
  },
  {
    title: "Finance advice",
    icon: <ChatBubbleOutlineOutlinedIcon />,
    state: "financeadvice",
  },
  {
    title: "Savings accoounts",
    icon: <SavingsOutlinedIcon />,
    state: "savingaccounnt",
  },
];

const Sidebar = ({ sidebarWidth }) => {
  const activeState = "overview";

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const MenuItem = (props) => {
    return (
      <ListItem
        key={props.index}
        disableGutters
        disablePadding
        sx={{ py: 0.5 }}
      >
        <ListItemButton
          sx={{
            borderRadius: "10px",
            bgcolor: props.isActive ? colors.green[600] : "",
            color: props.isActive ? colors.common.white : "",
            "&:hover": {
              bgcolor: props.isActive ? colors.green[600] : "",
              color: props.isActive ? colors.common.white : "",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: "40px",
              color: props.isActive ? colors.common.white : "",
            }}
          >
            {props.item.icon}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography fontWeight={600}>{props.item.title}</Typography>
            }
          />
        </ListItemButton>
      </ListItem>
    );
  };

  const drawer = (
    <Box
      padding={3}
      paddingBottom={0}
      display="flex"
      flexDirection="column"
      height="100vh"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {/* Logo Here!! */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Animate type="fade" delay={1}>
          <img src={images.logo} alt="logo" height={70} />
        </Animate>
      </Box>
      {/* Logo Here!! */}

      <Animate></Animate>
    </Box>
  );
  return (
    <Box
      component="nav"
      sx={{
        width: { md: sidebarWidth },
        flexShrink: { md: 0 },
      }}
    >
      {/* Larger Screens Design */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer.paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            borderWidth: 0,
            bgcolor: "transparent",
            "::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
        open
      >
        {drawer}
      </Drawer>
      {/* Larger Screens Design */}
    </Box>
  );
};

export default Sidebar;
