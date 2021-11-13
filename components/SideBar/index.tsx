import React from "react";
import Link from 'next/link';
import classes from "./SideBar.module.scss";
import {Button, ButtonBase, IconButton, Menu, MenuItem} from "@material-ui/core";
import {
    HomeOutlined  as HomeOutlinedIcon,
    PersonOutlineOutlined as PersonOutlineOutlinedIcon,
    EmailOutlined as EmailOutlinedIcon,
    RemoveRedEyeOutlined as RemoveRedEyeOutlinedIcon
} from '@material-ui/icons';

type propsType ={
    hide?: boolean
}



export const SideBar:React.FC<propsType> = (props) => {
    let [activeItem, setActiveItem]= React.useState<'home'| 'user' | 'contact' | 'projects'>('home')
    let setButtonMenu =(num: number)=>{
        let screenHeight = window.screen.height
        if (screenHeight <=900){
            let screenCoff = 900 * 0.6
            if(num <= screenCoff){
                setActiveItem('home')
            }else if(900 * 2 + (900 * 0.3) <= num){
                setActiveItem('projects')
            }else if((900 * 0.3) + 900 <= num){
                setActiveItem('contact')
            }else if(screenCoff < num){
                setActiveItem('user')
            }
        }else {
            let screenCoff = screenHeight * 0.6
            if(num <= screenCoff){
                setActiveItem('home')
            }else if(screenHeight * 2 + (screenHeight * 0.3) <= num){
            setActiveItem('projects')
            }else if((screenHeight * 0.3) + screenHeight  <= num){
                setActiveItem('contact')
            }else if(screenCoff < num){
                setActiveItem('user')
            }
        }
    }
    if (process.browser) {
        window.onscroll = function() {
            setButtonMenu(document.documentElement.scrollTop);
        }
    }
    let onClickSkill = (name:string)=>{
        let position = document.getElementById(name)
        let value = 0
        if (position !== null){
            value = position.offsetTop
        }
        window.scrollTo({
            top: value,
            behavior: "smooth"
        });
    }
    return (
        <div className={classes.side_bar}>
            <div className={classes.logo_wrapper}>

            </div>
            <div className={classes.menu_wrapper}>
                <div className={classes.block_menu}>
                    <div className={classes.block_menu_icons}>
                        {props.hide && <Link href={'/'}>
                            <IconButton>
                                <HomeOutlinedIcon className={classes.side_bar_icon}/>
                            </IconButton>
                        </Link>}
                        {!props.hide && <IconButton onClick={()=>onClickSkill('home')}>
                            <HomeOutlinedIcon className={activeItem === 'home' ? classes.side_bar_icon_active : classes.side_bar_icon}/>
                        </IconButton>}
                        {!props.hide && <IconButton onClick={()=>onClickSkill('aboutMe')}>
                            <PersonOutlineOutlinedIcon className={activeItem === 'user' ? classes.side_bar_icon_active : classes.side_bar_icon}/>
                        </IconButton>}
                        {!props.hide && <IconButton onClick={()=>onClickSkill('contact')}>
                            <EmailOutlinedIcon className={activeItem === 'contact' ? classes.side_bar_icon_active : classes.side_bar_icon}/>
                        </IconButton>}
                        {!props.hide && <IconButton onClick={()=>onClickSkill('projects')}>
                            <RemoveRedEyeOutlinedIcon className={activeItem === 'projects' ? classes.side_bar_icon_active : classes.side_bar_icon}/>
                        </IconButton>}
                    </div>
                </div>
                <div className={classes.block_icons}>

                </div>
            </div>
        </div>
    );
};


