import React from 'react';
import {makeStyles} from "@material-ui/styles";
// import {makeStyles} from "@mui/material";



const Style = makeStyles(
    {
        root:{
            height:"100vh",
            background:'#e6e6e6',
            overflowY:'auto',
        },

        divider:{
            background:"#7ebaff",
            filter:'opacity(0.2)'
        },

    }
);

export default Style;