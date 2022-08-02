import React from 'react';
import {Drawer} from "@mui/material";
import {setDrawerOpenUser, useLayoutDispatch, useLayoutState,} from "../../context/LayoutContext";
import LeftSidebar from "../leftSidebar/LeftSidebar";

const UserDrawer = () => {
    const {drawerOpenUser}=useLayoutState();
    const LayoutDispatch=useLayoutDispatch()
    return (<Drawer
                anchor={"left"}
                open={drawerOpenUser}
                onClose={()=> {
                    setDrawerOpenUser(LayoutDispatch)
                }}>
                <LeftSidebar/>
            </Drawer>
    );
};

export default UserDrawer;