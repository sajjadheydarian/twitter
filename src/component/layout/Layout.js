import React, {useEffect, useState} from 'react';
import style from "./style";
import {Divider, Typography} from "@material-ui/core";
import RightSideBar from "../RightSidebar/RightSidbar";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import {getProfileRequest} from "../../api/api-tweet";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {CircularProgress, useMediaQuery, useTheme} from "@mui/material";
import TwitterDrawer from "../Drawer/TwitterDrawer";
import UserDrawer from "../Drawer/UserDrawer";


const Layout = (props) => {
    const classes = style();
    const history = useHistory();
    const [wait, setWait] = useState(true);
    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('md'));
    const isPhoneSize = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        getProfileRequest((isOk, data) => {
            if (!isOk) {
                toast.error(data.message);
                localStorage.clear();
                return history.push('/login');
            }
            setWait(false);
            localStorage.setItem("name", data.name);
            localStorage.setItem("username", data.username);
            localStorage.setItem("image", data.image);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
        })
    }, [])
    if (wait) {
        return <div className={classes.waitParent}>
            <CircularProgress style={{margin: "1rem"}}/>
            <Typography>شکیبا باشید </Typography>
        </div>
    } else
        return (
            <div className={classes.root}>
                {!isTabletSize? <RightSideBar/>:<TwitterDrawer/>}
                <Divider className={classes.Divider} orientation={"vertical"}/>
                <div className={classes.content}>
                    {props.children}
                </div>
                <Divider className={classes.Divider} orientation={"vertical"}/>
                {!isPhoneSize? <LeftSidebar/>:<UserDrawer/>}
            </div>
        );
};

export default Layout;