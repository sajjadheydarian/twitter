import React, {useEffect, useRef, useState} from 'react';
import useStyle from './style';
import {ButtonBase, Divider, Grid, Menu, MenuItem, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import { getUsers} from "../../api/api-tweet";
import {UploadUserPhoto} from "../../api/api-auth";
import {toast} from "react-toastify";


function Tweeter({idBacken,name,id,img}) {
    const classes=useStyle();
    const getImageUser = () => {
        if (img)
            return img;
        else return '/images/person.png';
    }

    return (
        <Link to={"/users/"+idBacken+"/"+name} >
            <Divider style={{marginLeft:-24 , marginRight:-24}}/>
            <ButtonBase style={{width:'100%'}}>
                <Grid container direction={"row"} className={classes.tweeterParent}>
                    <img src={getImageUser()}  style={{width:"50px",height:"50px",borderRadius:'50%'}}/>
                    <Grid item direction={"column"}  className={classes.tweeterNameParent}>
                        <Typography className={classes.profName}>{name}</Typography>
                        <Typography className={classes.profId}>{id}</Typography>
                    </Grid>
                </Grid >
            </ButtonBase>
        </Link>
    )
}

const LeftSidebar = () => {
    const classes=useStyle();
    const [Users,setUsers]=useState([]);
    const [anchorMenu,setAnchorMenu]=useState();
    const [imageFile,setImageFile]=useState();
    const [imagePath,setImagePath]=useState();
    const inputRef=useRef();
    useEffect(()=>{
        getUsers((isOk,data)=>{
            if(!isOk){
                return toast.error(data.message());
            }
            else setUsers(data);
        })
    },[])
    const handleToggleMenu = (e) => {
        setAnchorMenu(e.currentTarget);
    }
    const getImage = () => {
        if(imagePath)
            return imagePath;
        if (localStorage.getItem('image') && localStorage.getItem('image') !=="undefined")
            return localStorage.getItem('image');
        return '/images/user-profiles.png';
    }
    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files.length>0){
            setImageFile(e.target.files[0]);
            const reader =new FileReader();
            reader.onload=(e)=>{
                setImagePath(e.target.result);
            }
            reader.readAsDataURL(e.target.files[0])
            const formData=new FormData();
            formData.append('image',e.target.files[0]);
            UploadUserPhoto(formData,(isOk,data)=>{
                if (!isOk)
                    return toast.error(data);
                toast.success("عکس با موفقیت آپلود شد");
                localStorage.setItem('image',data.imagePath);
                window.location.reload();
            })

        }
    }
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"} onClick={handleToggleMenu}>
                <img src={getImage()}  style={{width:"50px",height:"50px",borderRadius:'50%'}}/>
                <Grid item direction={"column"}  className={classes.profText}>
                    <Typography className={classes.profName}>{localStorage.getItem('name')}</Typography>
                    <Typography className={classes.profId}>{'@'+localStorage.getItem('username')}</Typography>
                </Grid>
                <input type={'file'} style={{display:'none'}} ref={inputRef} onChange={handleAvatarChange}/>
            </Grid >
            <Grid container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>
                    بهترین خبرنگاران
                </Typography>
                {
                    Users.map(item=><Tweeter idBacken={item._id} id={item.username} name={item.name} img={item.image}/>)
                }
            </Grid>
            <Menu open={Boolean(anchorMenu)} onClose={()=>setAnchorMenu(null)} anchorEl={anchorMenu}>
                <MenuItem onClick={()=>{
                    inputRef.current.click();
                }}>تغییر عکس پروفایل</MenuItem>
                <MenuItem onClick={()=>{
                    localStorage.clear();
                    window.location.reload();
                }}>خروج</MenuItem>
            </Menu>
        </div>
    );
};

export default LeftSidebar;