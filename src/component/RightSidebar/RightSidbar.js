import React, {useEffect, useState} from 'react';
import {ButtonBase, Grid, Typography} from "@material-ui/core";
import useStyle from "./style";
import {Link} from "react-router-dom";
import axios from "axios";
import {getHashTag} from "../../api/api-tweet";
import {toast} from "react-toastify";
import {useTweetDispatch, useTweetState,setHashTagList as setHashTags} from "../../context/TweetContext";


const RightSideBar = () => {
    const  classes= useStyle();
    // const [hashTags,setHashTags]=useState([]);
    const {hashTags} =useTweetState();
    const tweetDispatch=useTweetDispatch();
    useEffect(()=>{
        getHashTag((isOk,data)=>{
            if(!isOk){
                return toast.error(data.message());
            }
            else setHashTags(tweetDispatch,data);
        })
    },[])
    return (
        <div className={classes.root}>
            <Link to={'/'}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <Grid item className={"logoType"}>
                        <img src={"/images/logo.png"} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.logoType}>
                            توییتر فارسی
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography className={classes.hashTagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={"column"}>
                {
                    hashTags.map(item=>{
                        return <ButtonBase className={classes.hashtagParent} >
                            <Link to={'/hashtags/'+item.text} style={{width:'100%'}}>
                                <Grid item container >
                                    <img src={"/images/hashtag.png"}/>
                                    <Typography className={classes.hashtag}>
                                        {item.text}
                                    </Typography>
                                </Grid>
                            </Link>
                        </ButtonBase>
                    })
                }
            </Grid>


        </div>
    );
};

export default RightSideBar;