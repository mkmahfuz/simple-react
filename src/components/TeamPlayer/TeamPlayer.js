import React from 'react';
import './TeamPlayer.css';
const TeamPlayer = (props) => {
    const {name,salary,id} = props.player;
    return (
        <div className='teamPlayer'>
            <h5>Player: {name} ({id}) : &euro; {salary}</h5><button onClick={()=>props.handleRemovePlayer(props.player)}>Remove</button>
            <p></p>
        </div>
    );
};

export default TeamPlayer;