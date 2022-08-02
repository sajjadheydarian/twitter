import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import {Typography} from "@material-ui/core";
import useStyle from './style';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {useMediaQuery, useTheme} from "@mui/material";
import {setDrawerOpenUser, setDrawerOpen, useLayoutDispatch} from "../../context/LayoutContext";

const Header = ({title, icon}) => {
    const classes = useStyle();
    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('md'));
    const isPhoneSize = useMediaQuery(theme.breakpoints.down('sm'));

    const LayoutDispatch = useLayoutDispatch();
    return (
        <div className={classes.Header}>
            <div style={{display:'flex'}}>

            {isTabletSize && <MenuRoundedIcon onClick={() => {
                setDrawerOpen(LayoutDispatch)
            }} className={classes.moreMenu}/>}
            {icon}
            <Typography className={classes.HeaderTitle}>
                {title}
            </Typography>
            </div>
            <div>
            {isPhoneSize && <MenuRoundedIcon onClick={() => {
                setDrawerOpenUser(LayoutDispatch)
            }} className={classes.moreMenu}/>}
            </div>
        </div>
    );
};

export default Header;
