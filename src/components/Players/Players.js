
import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {
    const {id,name,salary,image} = props.player;
    return (
        <div className='players'>
            <p>Jersy No: {id}</p>
            <p>Name: {name}</p>
            <p>Salary: &euro; {salary} (Yearly)</p>
            <p><img src={image} alt=""/> </p>
            <button onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> Add to Team</button>
            
        </div>
    );
};

export default Players;