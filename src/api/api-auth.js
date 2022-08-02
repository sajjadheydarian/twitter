import {getAxiosInstanceApi, getAxiosInstanceAuth} from "./Api";

export const loginApi = (user,callback) => {
    getAxiosInstanceAuth().post('login',user)
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error.response.data.message)
        })
}
export const RegisterApi = (user,callback) => {
    getAxiosInstanceAuth().post('register',user)
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error.response.data.message)
        })
}
export const UploadUserPhoto = (file,callback) => {
    getAxiosInstanceApi().post('uploadUserPhoto',file)
        .then(responsive => {
            const data= responsive.data;
            callback(true,data)
        })
        .catch(error => {
            callback(false,error.response.data.message)
        })
}
