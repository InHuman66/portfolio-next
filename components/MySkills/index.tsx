import React from 'react';
import classes from "./AboutMe.module.css";

type propsType ={}

const AboutMe:React.FC<propsType> = () => {
    return (
        <div className={classes.MySkills_Block}>
            <div className={'custom-container'}>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <div className={classes.description_block}>
                            
                        </div>
                    </div>
                    <div className={'col-6'}>
                        <div className={classes.skills_block}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
