import React from 'react';
import Card from './Card';

const List = ({robots}) => {
    //const cardComponent = robots.map((user, i) => {
        //return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        /* if (true) {
            throw new Error(NOoooo!);
        } */
    return (
    <React.StrictMode> {
        robots.map((user, i) => {
        return (<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        );
        })
    }
    </React.StrictMode>
    );
}

export default List;