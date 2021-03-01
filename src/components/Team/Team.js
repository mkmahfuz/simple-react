
import React from 'react';
import { Badge } from 'react-bootstrap';
import TeamPlayer from '../TeamPlayer/TeamPlayer';
import './Team.css'

const Team = (props) => {
    const team = props.team;
    const totalBudget = team.reduce((total, player) => total + player.salary, 0);
    return (
        <div>
            <div className='playersCount'>
                <h2>Total Budget: &euro; {totalBudget} </h2>
                <h4>Players added: <Badge variant="secondary">{team.length}</Badge></h4>
            </div>
            {
                team.map((player) => <TeamPlayer player={player} key={player.id} handleRemovePlayer={props.handleRemovePlayer}></TeamPlayer>)
            }
        </div>
    );
};

export default Team;