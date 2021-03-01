import React from 'react';
import { Button } from 'react-bootstrap';
import './TeamPlayer.css';
const TeamPlayer = (props) => {
    const {name,salary,id} = props.player;
    return (
       
        <div className='team-player mb-4 pb-3'>
            <h5>Player: {name} ({id}) : &euro; {salary}</h5><Button variant="danger" size="sm" onClick={()=>props.handleRemovePlayer(props.player)}>Remove</Button>

        </div>
    );
};

export default TeamPlayer;