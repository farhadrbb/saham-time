import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import s from "../index.module.scss";
import ProfileEdit from "./editProfile";
import HotList from "./hotList";
import HotListPlus from "./hotListplus";
// import HotList from "./hotList";
// import HotListPlus from "./hotListPlus";
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

const ProfileTabs = ({type}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={s["profile-parent-tabs"]}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
          >
            <Tab
              label="ویرایش پروفایل"
              {...a11yProps(0)}
              className="text-light"
            />
            <Tab label="لایک ها" {...a11yProps(1)} className="text-light" />
            <Tab label="ذخیره شده" {...a11yProps(2)} className="text-light" />
            <Tab label="سبد ها" {...a11yProps(3)} className="text-light" />
            <Tab label="افزودن هات لیست" {...a11yProps(4)} className="text-light" />
            <Tab label="هات لیست ها" {...a11yProps(5)} className="text-light" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
         <ProfileEdit/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item 4
        </TabPanel>
        <TabPanel value={value} index={4}>
        <HotListPlus/>
        </TabPanel>
        <TabPanel value={value} index={5}>
        <HotList/>
        </TabPanel>
      </Box>
    </div>
  );
};

export default ProfileTabs;
