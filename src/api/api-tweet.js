import axios from "axios";
import {getAxiosInstanceApi, getAxiosInstanceJsonServer} from "./Api";

export const getAllTweets = (callback) => {
    getAxiosInstanceApi().post('getAllTweet')
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        })
}
export const getTweetsByHashTagRequest = (hashTag,callback) => {
    getAxiosInstanceApi().post('getAllTweet',{hashTag})
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        })
}
export const getTweetsByUserRequest = (user,callback) => {
    getAxiosInstanceApi().post('getAllTweet',{user})
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        })
}

export const getHashTag = (callback) => {
    getAxiosInstanceApi().get('/getAllHashTags')
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        })
}
export const getUsers = (callback) => {
    getAxiosInstanceApi().get('/getAllUser')
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        })
}
export const getProfileRequest = (callback) => {
    getAxiosInstanceApi().get('getProfile')
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        })
}
export const NewTweetRequest = (data,callback) => {
    getAxiosInstanceApi().post('newTweet',data)
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        })
}
export const LikeTweetRequest = (id,callback) => {
    getAxiosInstanceApi().get('likeTweet/'+id)
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error)
        })
}