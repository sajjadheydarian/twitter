import React from 'react';
import {makeStyles} from "@material-ui/styles";
import theme from "../theme";
// import {makeStyles} from "@mui/material";

const Style = makeStyles(
    {
        root : {
            width:"18%",
            height:"100vh !important",
            background:"white",
            padding:"1.5rem 1rem",
            [theme.breakpoints.down('md')]:{
                width:'100%'
            }
        },
        logoType:{
            fontSize:"1.25rem",
            fontWeight:"600 !important",
            marginRight:'1rem',
            color:theme.palette.primary.main
        },
        hashTagTitle:{
            fontSize:"1.1rem",
            fontWeight:"600 !important",
            marginTop:"3rem",
            marginBottom:'1.5rem'
        },
        hashtag:{
          marginRight:"0.8rem",
        },
        hashtagParent:{
            marginBottom:"0.5rem",
            padding :"0.15rem",
        }
    }
)

export default Style;