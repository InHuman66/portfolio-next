import '../styles/globals.scss'
import Head from 'next/head';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
import React from "react";
import {setupStore} from "../bll/store/store";
import {Provider} from "react-redux";

let maxDec = 20
if (process.browser) {
    maxDec = window.screen.width/19.2
}

function MyApp({ Component, pageProps }: AppProps) {
    const particlesOptions ={
        "fps_limit": 50,
        "particles": {
            "number": {
                "value": maxDec,
                "density": {
                    "enable": true,
                    "value_area": 552.4033491425909
                }
            },
            "color": {
                "value": "#1AF7E3"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#0d64b1"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 7.227487189481971,
                    "opacity_min": 0.828318756547372,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 9.59040959040959,
                    "size_min": 7.1928071928071935,
                    "sync": true
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#204d6e",
                "opacity": 1,
                "width": 0.8017060304327615
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
    const store = setupStore();
  return (
      <>
        <Head>
          <title>RJournal</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
              rel="stylesheet"></link>
        </Head>
        <MuiThemeProvider theme={theme}>
            <Particles className={'particle'} params={particlesOptions}/>
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
        </MuiThemeProvider>
      </>
  )
}
export default MyApp
