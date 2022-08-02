import React from 'react';
import useStyle from "../style";
import { Grid, IconButton, Typography} from "@material-ui/core";
import {Favorite} from '@material-ui/icons';
import {useTweetDispatch, setTweetText, likeTweet} from "../../../context/TweetContext";
import {LikeTweetRequest} from "../../../api/api-tweet";
import {toast} from "react-toastify";

const Tweet = ({data}) => {
    const tweetDispatch=useTweetDispatch();

    const renderTweetText =(text)=>{
        return {__html:text.replace(/#\S+/g,"<a href='/Tag/$&' style= 'color:cornflowerblue !important'>$&</a>")};
    }
    const classes=useStyle();
    const getImage = () => {
      if (data.user.image)
          return data.user.image;
      else return "/images/person.png";
    }
    const reTweetClick = () => {
      setTweetText(tweetDispatch,data.text);
    }
    const handleLike = () => {
        LikeTweetRequest(data._id,(isOk,data)=>{
            if (!isOk)
                return toast.error(data);
            likeTweet(tweetDispatch,data._id);

        })
    }
    return (
        <div className={classes.TweetItem}>
            <Grid container >
                <img alt={'profile'} src={getImage()}  style={{width:"60px",height:"60px",borderRadius:'50%'}}/>
                <Grid item container direction={'column'} style={{flex:1}}>
                    <Grid item container >
                    <Typography className={classes.TweetName}>{data.user.name}</Typography>
                    <Typography className={classes.TweetId}>{'@'+data.user.username}</Typography>
                    </Grid>
                    <Typography dangerouslySetInnerHTML={renderTweetText(data.text)} className={classes.TweetText} compunent={'p'}/>
                </Grid>
            </Grid>
                {(data.image && data.image!=='undefined' )&&
                    <div style={{display:'block'}}>
                        <div style={{backgroundImage:`url(${data.image})`}} className={classes.tweetImg}></div>
                    </div>
                }
            <Grid container direction={"row-reverse"} style={{marginTop:'1rem'}} alignItems={"center"}>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={'/images/retweet.png'} className={classes.newTweetImg} onClick={reTweetClick}/>
                </IconButton>
                <IconButton className={classes.newTweetImgBtn} onClick={handleLike}>
                    <Favorite />
                </IconButton>
                <Typography className={classes.TweetLikes}>{data.likes}</Typography>

            </Grid>
        </div>
    );
};

export default Tweet;