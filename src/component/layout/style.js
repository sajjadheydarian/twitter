import React from 'react';
import {makeStyles} from "@material-ui/styles";
import theme from "../theme";
// import {makeStyles} from "@mui/material";

const Style = makeStyles(
    {
        root:{
            display:"flex",
            fontFamily:"shabnam !important",
            direction:'rtl',
            padding:'unset',
            overflow:'hidden !important',

        },
        mainPart:{
            flex:1,
            height:"100vh",
            background:'blue'
        },
        Divider:{
            width:'2px !important',
            height:'100vh !important',
            background:"#7ebaff !important",
            filter:'opacity(0.5)'
        },
        content:{
            flex:1,
        },
        waitParent:{
            display:"flex",
            width:"100%",
            height:"100vh",
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            position:'absolute',
            top:0,
            left:0,
        }


    }
)

export default Style;