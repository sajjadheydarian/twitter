import React, {useEffect, useState} from 'react';
import useStyle from "./style";
import Header from "../../component/header/Header";
import {Divider} from "@material-ui/core";
import TweetList from "../home/components/TweetList";
import {Person} from '@material-ui/icons';
import axios from "axios";
import {getAllTweets, getTweetsByUserRequest} from "../../api/api-tweet";
import {useTweetState, setTweetList as setTweets, useTweetDispatch} from "../../context/TweetContext";
import {toast} from "react-toastify";
import {useLocation} from "react-router-dom";
import {Typography} from "@mui/material";




const TweetsByUser = (props) => {
    const classes =useStyle();
    // const [Tweets,setTweets]=useState([]);
    const {tweetList:Tweets}=useTweetState();
    const tweetDispatch=useTweetDispatch();
    const location =useLocation();
    useEffect(()=>{
        getTweetsByUserRequest(props.match.params.id,(isOk,data)=>{
            if(!isOk){
                return toast.error(data);
            }
            else setTweets(tweetDispatch,data);
        })
    },[location])
    return (
        <div className={classes.root}>
            <Header title={props.match.params.name} icon={<Person/>}/>
            <Divider className={classes.divider}/>
            {Tweets.length ===0 &&
                <Typography style={{margin:"1rem",background:"white",padding:"1rem"}}>
                    این کاربر تا الان توییتی نداشته است!!
                </Typography>
            }
            <TweetList data={Tweets}/>
        </div>
    );
};


export default TweetsByUser;