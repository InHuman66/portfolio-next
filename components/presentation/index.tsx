import React, {useEffect} from 'react';
import  classes from './presentation.module.scss';
import {KeyboardArrowRight as KeyboardArrowRightIcon} from '@material-ui/icons';
import { Button } from '@material-ui/core';

type propsType ={
    id: string | undefined | string[]
}
type presentationWorkType ={
    id: number
    name: string
    img: string
    smallDescription: string
    href:string
    GitHubLink: string
    smallDescriptionRus:string
}
let mainProject = {} as presentationWorkType
const Presentation:React.FC<propsType> = (props) => {
    let dataWorks =[
        {
            id: 1,
            name: 'Social Network',
            img: '',
            smallDescription: 'This is my first big project with React-Redax, here I used:\n' + '-flux concept\n' + '-Api/axios\n' + '-React Hooks\n' + '-Redux thunk\n' + '-Bootstrap\n' + '-TypeScript',
            href:'https://inhuman66.github.io/Social-network-new/', GitHubLink:'https://github.com/InHuman66/Social-network-new',
            smallDescriptionRus:'Это мой первый большой проект c React-Redax, здесь я использовал:\n' + '-flux concept\n' + '-Api / axios\n' + '-React Hooks\n' + '-Redux thunk\n' + '-Bootstrap\n' + '-TypeScript'
        },
        {
            id: 2,
            name: 'Todo list',
            img: '',
            smallDescription: 'It`s simple app for schedule tasks, here i used: \n' + '-Unit testing \n' + '-Api/axios\n' + '-flux concept \n' + '-Redux thunk \n' + '-TypeScript \n' + '-React + Redax\n' + '-material-ui',
            href:'https://inhuman66.github.io/To-Do-List',
            GitHubLink:'https://github.com/InHuman66/To-Do-List',
            smallDescriptionRus:'Это простое приложение для расписания задач, здесь я использовал:\n' + '-Unit тестирование\n' + '-Api/axios\n' + '-flux концепцию\n' + '-Redux thunk\n' + '-TypeScript\n' + '-React + Redax\n' + '-material-ui'
        },
        {
            id: 3,
            name: 'Cards',
            img: '',
            smallDescription: 'In progress...',
            href:'',
            GitHubLink:'',
            smallDescriptionRus:'В процессе...'
        },
        {
            id: 4,
            name: 'Social Network',
            img: '',
            smallDescription: 'It`s my first project on React',
            href:'',
            GitHubLink:'',
            smallDescriptionRus:''
        },
    ]
    let [currentProject, setCurrentProject] = React.useState({}as presentationWorkType )
    useEffect(()=>{
        let find = dataWorks.find((u)=>u.id === Number(props.id))
        if (find != undefined){
            setCurrentProject(find)
        }
    },[props.id])


    return (
        <div className={classes.content_wrapper}>
            <div className={'custom-container'}>
                <div className={classes.image_container}>
                    <img className={classes.present_img}/>
                </div>
                <div className={classes.description_wrapper}>
                    <div className={'row'}>
                        <div className={'col-8'}>
                            <div className={classes.description_block}>
                                <h1>{currentProject.name}</h1>
                                <p>{currentProject.smallDescription}</p>
                                <a href={currentProject.href}  className={classes.live_preview}>Live preview<KeyboardArrowRightIcon/></a>
                            </div>
                        </div>
                        <div className={'col-4'}>
                            <div className={classes.links_block}>
                                <h1>Useful links</h1>
                                <p>GitHub:<Button className={classes.button_use} href={currentProject.GitHubLink}>Click Hear</Button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
