import React from 'react';
import {makeStyles} from "@material-ui/styles";
import theme from "../theme";
// import {makeStyles} from "@mui/material";

const Style = makeStyles(
    {
        root:{
            width:"25%",
            height:"100vh !important",
            background:"white",
            padding:"1.5rem 2rem",
            [theme.breakpoints.down('sm')]:{
                width:'max-content'
            }
        },
        profText:{
            marginLeft:"0.5rem",
            direction:"ltr",
            width:"max-content"
        },
        tweeterNameParent:{
            marginRight:"0.5rem",
            width:"max-content"
        },
        profName:{
            flex:1,
            fontWeight:600,
        },
        profId:{
            flex:1,
            color:theme.palette.text.hint,
            fontSize:"0.78rem"
        },
        tweeterParent:{
            padding:"10px 0"
        },
        tweeterRoot:{
            marginTop:"3rem",
            background:"#f5f8fa",
            borderRadius:"2.5rem",
            padding:"11px 24px"

        },
        tweeterTitle:{
            fontSize:"1.1rem",
            fontWeight:"600 !important",
            marginBottom:'11px'
        }

    }
)

export default Style;