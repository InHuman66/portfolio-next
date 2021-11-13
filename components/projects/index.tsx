import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Projects.module.scss";
import Work from "./Work/Work";
import { Fade } from 'react-awesome-reveal';

type propsType ={

}

const Projects:React.FC<propsType>=()=> {

    let dataWorks =[
        {id: 1, name: 'Social Network', img: '/assets/projects/social_network.png', smallDescription: 'It`s my first project on React', href:'', smallDescriptionRus: 'Это мой первый проект на React'},
        {id: 2, name: 'Todo list', img: '/assets/projects/todo_list.png', smallDescription: 'It`s simple app for schedule tasks', href:'', smallDescriptionRus: 'Простое приложение для расписания задач'},
        {id: 3, name: 'TjornalClone', img: '/assets/projects/test.jpeg', smallDescription: 'In progress...', href:'', smallDescriptionRus: 'В процессе...'},
    ]
    return (
        <div id={'projects'} className={classes.backGroungSizeMyWorks}>
            <div className={'container'}>
                <div className={classes.title}>
                    <h1>My PET projects</h1>
                </div>
                <Fade direction={'up'} triggerOnce={true}>
                    <div className={classes.BlockWorks + ' row'}>
                        {dataWorks.map((elem)=><Work  smallDescriptionRus={elem.smallDescriptionRus} key={elem.id} href={elem.href} name={elem.name} img={elem.img} id={elem.id} smallDescription={elem.smallDescription}/> )}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;