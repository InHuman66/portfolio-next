import React from 'react';
import classes from "./AboutMe.module.scss";
import {DoubleArrow as DoubleArrowIcon} from '@material-ui/icons';
import Skill from "./Skill";
type propsType ={}

const AboutMe:React.FC<propsType> = () => {
    let arrSkills = [
        {id: '1', smallDescription: 'HTML/CSS-Strong knowledge: SASS, Bootstrap, Grid, Flex..', extendedDescription: ' awaw ad awda awd awd adad awd awd da dwad ad awdaw dadawd awd ad ada daw da dawd ada awd awd awd awda wda dad wad awd awd awd awd awd awda wad awd '},
        {id: '2', smallDescription: 'JavaScript, Typescript', extendedDescription: ''},
        {id: '3', smallDescription: 'Git: push, merge, clone, pull, stash, understanding git flow', extendedDescription: 'awaw ad awda awd awd adad awd awd da dwad ad awdaw dadawd awd ad ada daw da dawd ada awd awd awd awda wda dad wad awd awd awd awd awd awda wad awd'},
        {id: '4', smallDescription: 'React (react hooks), Redux, Context API, thunk', extendedDescription: ''},
        {id: '5', smallDescription: 'Next.js, Material-UI.........................', extendedDescription: ''},
        {id: '6', smallDescription: 'Node.js(express, nestJS)', extendedDescription: ''},
        {id: '7', smallDescription: 'experience working with Figma, Photoshop     ', extendedDescription: ''},
    ]
    return (
        <div className={classes.MySkills_Block} id={'aboutMe'}>
            <div className={classes.mySkills_wrapper + ' custom-container'}>
                <div style={{height: '100%'}} className={'row'}>
                    <div className={classes.description_wrapper + ' col-5'}>
                        <div className={classes.description_block}>
                            <h1>About me</h1>
                        </div>
                    </div>
                    <div  className={classes.description_wrapper + ' col-6 offset-1'}>
                        <div className={classes.skills_block}>
                            {arrSkills.map( item => <Skill key={item.id} exDesc={item.extendedDescription} smallDesc={item.smallDescription}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
