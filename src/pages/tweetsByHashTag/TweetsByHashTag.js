import React, {useEffect, useState} from 'react';
import useStyle from "./style";
import Header from "../../component/header/Header";
import {Divider} from "@material-ui/core";
import NewTweet from "../home/components/NewTweet";
import TweetList from "../home/components/TweetList";
import axios from "axios";
import {getAllTweets, getTweetsByHashTagRequest} from "../../api/api-tweet";
import {useTweetState, setTweetList as setTweets, useTweetDispatch} from "../../context/TweetContext";
import {toast} from "react-toastify";
import {useLocation} from 'react-router-dom';




const TweetsByHashTag = (props) => {
    const classes =useStyle();
    const location =useLocation();
    // const [Tweets,setTweets]=useState([]);
    const {tweetList:Tweets}=useTweetState();
    const tweetDispatch=useTweetDispatch();
    useEffect(()=>{
        getTweetsByHashTagRequest(props.match.params.hashtag,(isOk,data)=>{
            if(!isOk){
                return toast.error(data);
            }
            else setTweets(tweetDispatch,data);
        })
    },[location])
    return (
        <div className={classes.root}>
            <Header title={props.match.params.hashtag} icon={<img src={"/images/hashtag.png"}/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={Tweets}/>
        </div>
    );
};


export default TweetsByHashTag;