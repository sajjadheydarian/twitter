import React from 'react';
import {makeStyles} from "@material-ui/styles";


const Style = makeStyles(
    {
        root:{
            width: '30rem',
            margin: '5rem auto',
            borderRadius:'10px',
            padding:'1rem'
        },
        tab:{
            fontFamily:"shabnam !important",
            flex:1
        },
        header:{
            margin:'1rem',
            fontWeight:'600',
            display:'flex',
            justifyContent:'center'
        },
        containerInput:{
            margin:'1rem 0.8rem',
            display:'flex',
            flexDirection:'column'
        },
        btnInput:{
            marginBottom:'1rem',
            border:'solid 1px rgba(0,0,0,0.2)',
            borderRadius:"5px"
        }
    }
);

export default Style;