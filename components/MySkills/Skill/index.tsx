import React from 'react';
import  classes from './Skill.module.scss'
import {DoubleArrow as DoubleArrowIcon} from "@material-ui/icons";

type propsType ={
    smallDesc: string
    exDesc: string
}

const Skill:React.FC<propsType> = (props) => {
    let [extendedMode, setExtendedMode]= React.useState(false)
    let onClickSwitchOpen = ()=>{
        setExtendedMode(!extendedMode)
    }
    return (
            <div style={{maxHeight: extendedMode ? '200px': '45px'}} onClick={()=>{onClickSwitchOpen()}}  className={classes.skill_item}>
                <div className={classes.wrap_items}>
                    <DoubleArrowIcon className={classes.icon}/>
                    <p>{props.smallDesc}</p>
                </div>
                <div className={classes.ext_description}>
                    <p>{props.exDesc}</p>
                </div>
            </div>
    );
};

export default Skill;
