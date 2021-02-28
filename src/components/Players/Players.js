import React from 'react';
import './Players.css';

const Players = (props) => {
    const {id,name,salary,image} = props.player;
    return (
        <div className='players'>
            <p>Jersy No: {id}</p>
            <p>Name: {name}</p>
            <p>Salary: &euro; {salary} M</p>
            <p><img src={image} alt=""/> </p>
            <button onClick={()=>props.handleAddPlayer(props.player)}>Add to Team</button>
            
        </div>
    );
};

export default Players;