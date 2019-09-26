import React from 'react';
import {RobotCard} from '../card/robotcard';
import './card-list.css';

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster=>(
               <RobotCard key={monster.id} monster={monster}/>
            ))}
        </div>
    );
};
