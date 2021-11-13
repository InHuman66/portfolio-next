import React ,{Suspense, useRef} from 'react';
import classes from './MyWiew.module.scss';
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import { Canvas, useFrame } from '@react-three/fiber';
import Model from './Model'
import {OrbitControls} from "@react-three/drei";
import {Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
type propsType ={

}



const MyView:React.FC<propsType> = () => {
    return (
        <div className={classes.my_wrapper} id={'home'}>
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
                           <Canvas shadows>
                               <EffectComposer>
                                   <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={0.2} height={480} />

                                   <Noise opacity={0.02} />
                                   <Vignette eskil={false} offset={0.1} darkness={1.1} />
                               </EffectComposer>
                               <ambientLight intensity={0.5}/>
                               <Suspense fallback={null}>
                                   <Model position={[0,0,0]}/>
                               </Suspense>
                               <pointLight  position={[100, 100, 100]} />
                               <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                           </Canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyView;
