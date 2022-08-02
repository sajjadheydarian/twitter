import React from 'react';
import {Drawer} from "@mui/material";
import RightSidbar from "../RightSidebar/RightSidbar";
import {setDrawerOpen, useLayoutDispatch, useLayoutState,} from "../../context/LayoutContext";

const TwitterDrawer = () => {
    const {drawerOpen}=useLayoutState();
    const LayoutDispatch=useLayoutDispatch()
    return (<Drawer
                anchor={"right"}
                open={drawerOpen}
                onClose={()=> {
                    setDrawerOpen(LayoutDispatch)
                }}>
                <RightSidbar/>
            </Drawer>
    );
};

export default TwitterDrawer;