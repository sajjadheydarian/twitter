import React from 'react';
import {makeStyles} from "@material-ui/styles";
// import {makeStyles} from "@mui/material";



const Style = makeStyles(theme=>(
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
        newTweet:{
            padding:"18px",
            display:'flex',
            flexDirection:'column',
            background:"white"
        },
        TweetItem:{
            padding:"18px",
            display:'flex',
            flexDirection:'column',
            background:"white",
            marginTop:'0.5rem'
        },
        textArea:{
            flex:1,
            marginRight:'0.5rem',
            border:"none",
            outline:"none",
            height:'5rem'
        },
        newTweetBtn:{
            color:"white  !important",
            // marginTop:"2rem",
            borderRadius:'1rem !important',
            minHeight:'30px !important',
            height:'30px !important',
            lineHeight:'1rem !important',
            minWidth:'5rem !important',
        },
        newTweetImg:{

        },
        newTweetImgBtn:{
            border: '0.5px solid #3339',
            borderRadius:'50%',
            marginLeft:'1rem',
            padding:'0.2rem !important',

        }
        ,TweetName :{
            fontWeight:600,
            marginRight:'1rem',

        }
        ,TweetId :{
            fontSize:'0.9rem',
            marginRight:'0.5rem',
            color:theme.palette.text.hint,
            filter:'opacity(0.8)',
            marginTop:'0.1rem',
            direction:'ltr',
        }
        ,TweetLikes :{
            marginLeft:'0.5rem',
            fontSize:'0.8rem',
            color:theme.palette.text.hint,
        },
        TweetText:{
            fontSize:'0.9rem',
            marginTop:'0.75rem',
            marginRight:'1rem'
        },
        tweetImg:{
            height:'10rem',
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat',
            marginTop:'1rem',

        }
    }
));

export default Style;