import React from "react";
import Link from 'next/link';
import classes from "./Header.module.scss";
import {Button, ButtonBase, IconButton, Menu, MenuItem} from "@material-ui/core";
import clsx from "clsx"
import {
    HomeOutlined  as HomeOutlinedIcon,
    PersonOutlineOutlined as PersonOutlineOutlinedIcon,
    EmailOutlined as EmailOutlinedIcon,
    RemoveRedEyeOutlined as RemoveRedEyeOutlinedIcon
} from '@material-ui/icons';

type propsType ={

}



export const SideBar:React.FC<propsType> = () => {
    let [activeItem, setActiveItem]= React.useState<'home'| 'user' | 'contact' | 'projects'>('home')
    let setButtonMenu =(num: number)=>{
        let screenHeight = window.screen.height
        console.log(num)
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
    return (
        <div className={classes.side_bar}>
            <div className={classes.logo_wrapper}>

            </div>
            <div className={classes.menu_wrapper}>
                <div className={classes.block_menu}>
                    <div className={classes.block_menu_icons}>
                        <IconButton>
                            <HomeOutlinedIcon className={activeItem === 'home' ? classes.side_bar_icon_active : classes.side_bar_icon}/>
                        </IconButton>
                        <IconButton>
                            <PersonOutlineOutlinedIcon className={activeItem === 'user' ? classes.side_bar_icon_active : classes.side_bar_icon}/>
                        </IconButton>
                        <IconButton>
                            <EmailOutlinedIcon className={activeItem === 'contact' ? classes.side_bar_icon_active : classes.side_bar_icon}/>
                        </IconButton>
                        <IconButton>
                            <RemoveRedEyeOutlinedIcon className={activeItem === 'projects' ? classes.side_bar_icon_active : classes.side_bar_icon}/>
                        </IconButton>
                    </div>
                </div>
                <div className={classes.block_icons}>

                </div>
            </div>
        </div>
    );
};


