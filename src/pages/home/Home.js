import React, {useEffect, useState} from 'react';
import useStyle from './style';
import Header from "../../component/header/Header";
import {Divider} from "@material-ui/core";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import {getAllTweets} from "../../api/api-tweet";
import {useTweetState, setTweetList as setTweets, useTweetDispatch} from "../../context/TweetContext";


const Home = () => {
    const classes =useStyle();
    // const [Tweets,setTweets]=useState([]);
    const {tweetList:tweets}=useTweetState();
    const tweetDispatch=useTweetDispatch();

    useEffect(()=>{
        updateTweets();
    },[])
    const updateTweets = () => {
        getAllTweets((isOk,data)=>{
            if(!isOk){
                alert(data.message);
            }
            else setTweets(tweetDispatch,data);
        })
    }
    return (
        <div className={classes.root}>
            <Header title={'خانه'} icon={<HomeIcon/>}/>
            <Divider className={classes.divider}/>
            <NewTweet updateTweets={updateTweets}/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default Home;