import React from 'react';
import classes from './MyWiew.module.scss';
import Particles from 'react-particles-js';
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
type propsType ={

}
let maxDec = 20
if (process.browser) {
    maxDec = window.screen.width/19.2
}
const MyView:React.FC<propsType> = () => {
    const particlesOptions ={
        particles:{
            number:{
                value: maxDec,
                density:{
                    enable:true,
                    value_area:800
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    }
                }
            },
            move:{
                speed: 0.5
            }
        }
    }
    return (
        <div className={classes.my_wrapper}>
            <Particles className={classes.particles} params={particlesOptions}/>
            <div className={'custom-container'}>
                <div className={'row'}>
                     <div className={classes.block_description + ' col-6'}>
                         <Fade>
                             <p>Hi There</p>
                             <h1>I Kiselyk Alexandr</h1>
                             <ReactTypingEffect text={'Front-end Developer'}/>
                         </Fade>
                     </div>
                    <div className={'col-6'}>
                        <div className={classes.nice_thin}>
                            <p>To be con...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyView;
