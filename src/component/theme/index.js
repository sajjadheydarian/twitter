import React from 'react';
import {createMuiTheme} from "@mui/material";
const colorPrimary ="#5ea9dd";
const Theme = createMuiTheme({
    palette:{
        primary:{
            main:colorPrimary
        }
    },
    overrides:{
        MuiTypography:{
            root:{
                fontFamily:"shabnam !important",
            }

        }
    }
});

export default Theme;