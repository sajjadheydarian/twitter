import React from 'react';
import {makeStyles} from "@material-ui/styles";
// import {makeStyles} from "@mui/material";


const Style = makeStyles(
    {

        Header: {
            padding: 24,
            display: 'flex',
            background: 'white',
            justifyContent: 'space-between'
        },
        HeaderTitle: {
            fontWeight: 600,
            fontSize: "1.2rem",
            marginRight: "0.5rem",
        },
        moreMenu: {
            marginLeft: '0.5rem'
        }

    }
);

export default Style;