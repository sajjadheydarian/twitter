import React, {useRef, useState} from 'react';
import {Button, Grid, IconButton} from "@material-ui/core";
import useStyle from '../style';
import {NewTweetRequest} from "../../../api/api-tweet";
import {toast} from "react-toastify";
import {
    useTweetDispatch,
    useTweetState,
    setTweetText as setTweet,
    updateHashTagList
} from "../../../context/TweetContext";

const NewTweet = ({updateTweets}) => {
    const classes = useStyle();
    const inputFile = useRef();
    const {tweetText: tweet} = useTweetState();
    const tweetDispatch = useTweetDispatch();
    // const [tweet,setTweet]=useState();
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();
    const newTweetOnClick = () => {
        const text = tweet;
        // const data ={
        //     "text": text,
        // }
        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('text', text);
        NewTweetRequest(formData, (isOk, data) => {
            if (!isOk) toast.error(data);
            else toast.success("ارسال شد");
            setTweet(tweetDispatch, "");
            setImagePath();
            updateTweets();
            if (text.include("#"))
                updateHashTagList(tweetDispatch);
        })
    }
    const getImage = () => {
        if (localStorage.getItem('image') && localStorage.getItem('image') !== "undefined")
            return localStorage.getItem('image');
        return '/images/person.png';
    }
    const selectImg = () => {
        inputFile.current.click();
    }
    const onChangeImg = (e) => {
        if (e.target.files && e.target.files.length > 0)
            setImageFile(e.target.files[0])
        const reader = new FileReader();
        reader.onload = (e) => {
            setImagePath(e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={getImage()} style={{width: "50px", height: "50px", borderRadius: '50%'}}/>
                <textarea placeholder={"توییت کن ..."} className={classes.textArea} value={tweet}
                          onChange={event => setTweet(tweetDispatch, event.target.value)}/>
                <input type={"file"} style={{display: 'none'}} ref={inputFile} onChange={onChangeImg}/>
            </Grid>
            {imagePath &&
                <div>
                    <div style={{backgroundImage: `url(${imagePath})`}} className={classes.tweetImg}></div>
                </div>
            }
            <Grid container direction={"row-reverse"} style={{marginTop: '1rem'}}>
                <Button variant={"contained"} color={"primary"} className={classes.newTweetBtn}
                        onClick={newTweetOnClick}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn} onClick={selectImg}>
                    <img src={'/images/tweetpic.png'} className={classes.newTweetImg}/>
                </IconButton>
            </Grid>
        </div>
    );
};

export default NewTweet;