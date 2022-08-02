import React, {useState} from 'react';
import {Button, Input, Paper, Typography} from "@material-ui/core";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useStyle from  './style';
import {toast} from "react-toastify";
import {loginApi, RegisterApi} from "../../api/api-auth";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const login_tab_value=1;
const reg_tab_value=2;
const AuthPage = () => {
    const history = useHistory();
    const classes=useStyle();
    const [value,setValue]=useState(login_tab_value);
    // login state
    const [usernameLogin,setUsernameLogin]=useState();
    const [passwordLogin,setPasswordLogin]=useState();
    // register
    const [usernameRegister,setUsernameRegister]=useState();
    const [passwordRegister,setPasswordRegister]=useState();
    const [confPasswordRegister,setConfPasswordRegister]=useState();
    const [fullNameRegister,setFullNameRegister]=useState();
    const validateRegister = (user) => {
        if (!user.username)
            return "حتما باید یوزرنیم خود را وارد کنید ";
        if (!user.password)
            return "حتما باید پسورد خود را وارد کنید";
        if (user.password !== user.confPasswordRegister)
            return "حتما باید پسوردها یکسان باشد";
    }
    const handleRegister = () => {
        const user={
            username: usernameRegister,
            password: passwordRegister,
            name:fullNameRegister,
            confPasswordRegister:confPasswordRegister
        };
        const error =validateRegister(user);
        if (error)
            return toast.warn(error);
        user.confPasswordRegister=undefined;
        RegisterApi(user,(isOk,data)=>{
            if (!isOk)
                return toast.warn(data);
            toast.success('با موفقیت انجام شد');
            localStorage.setItem("name",data.name);
            localStorage.setItem("username",data.username);
            localStorage.setItem("image",data.image);
            localStorage.setItem("x-auth-token",data["x-auth-token"]);
            // window.location.reload();
            history.push('/');
        });
    }
    const validateLogin = (user) => {
        if (!user.username)
            return "حتما باید یوزرنیم خود را وارد کنید ";
        if (!user.password)
            return "حتما باید پسورد خود را وارد کنید";
    }
    const handleLogin = () => {
        const user ={
            username:usernameLogin,
            password:passwordLogin
        };
        const text =validateLogin(user);
        if (text)
            return toast.warn(text);
        loginApi(user,(isOk,data)=>{
            if (!isOk)
                return toast.warn(data);
            toast.success('با موفقیت انجام شد');
            localStorage.setItem("name",data.name);
            localStorage.setItem("username",data.username);
            localStorage.setItem("image",data.image);
            localStorage.setItem("x-auth-token",data["x-auth-token"]);
            // window.location.reload();
            history.push('/');
        })
    }
    const handleChange = (e,newValue) => {
        setValue(newValue);
    }
    return (
        <Paper className={classes.root}>
            <Typography className={classes.header}>به توییتر ما خوش آمدید</Typography>
            <Tabs value={value} onChange={handleChange} centered >
                <Tab label="ورود"  value={login_tab_value} className={classes.tab}/>
                <Tab label="ثبت نام" value={reg_tab_value} className={classes.tab}/>
            </Tabs>
            {value===login_tab_value &&
                <div className={classes.containerInput}>
                    <Typography>نام کاربری</Typography>
                    <Input className={classes.btnInput} value={usernameLogin} onChange={event => setUsernameLogin(event.target.value)} ></Input>
                    <Typography>رمز عبور</Typography>
                    <Input className={classes.btnInput} value={passwordLogin} onChange={event => setPasswordLogin(event.target.value)}></Input>
                    <Button variant={'contained'} color={'primary'} onClick={handleLogin}>ورود</Button>
                </div>
            }
            {value===reg_tab_value &&
                <div className={classes.containerInput}>
                    <Typography>نام کامل</Typography>
                    <Input className={classes.btnInput} value={fullNameRegister} onChange={event => setFullNameRegister(event.target.value)} ></Input>
                    <Typography>نام کاربری</Typography>
                    <Input className={classes.btnInput} value={usernameRegister} onChange={event => setUsernameRegister(event.target.value)}></Input>
                    <Typography>رمز عبور</Typography>
                    <Input className={classes.btnInput} value={passwordRegister} onChange={event => setPasswordRegister(event.target.value)}></Input>
                    <Typography>تکرار رمز عبور</Typography>
                    <Input className={classes.btnInput} value={confPasswordRegister} onChange={event => setConfPasswordRegister(event.target.value)}></Input>
                    <Button variant={'contained'} color={'primary'} onClick={handleRegister}>ثبت نام</Button>
                </div>
            }
        </Paper>
    );
};

export default AuthPage;