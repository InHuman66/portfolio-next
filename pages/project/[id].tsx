import React from 'react';
import {SideBar} from "../../components/SideBar";
import Presentation from "../../components/presentation";
import { useRouter } from 'next/router'

type propsType ={
    id: string
}

export  default function Project(props: propsType){
    const router = useRouter()
    return (
        <div>
            <SideBar hide={true}/>
            <Presentation id={props.id}/>
        </div>
    );
};
export const getServerSideProps = async (ctx: { query: { id: any; }; }) => {
    try {
        return {
            props: {
                id: ctx.query.id
            },
        };
    } catch (error) {
        console.log('ERROR!');
        return {
            props: {
                id: 0
            },
        };
    }
};