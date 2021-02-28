import React from 'react';
import TeamPlayer from '../TeamPlayer/TeamPlayer';

const Team = (props) => {
    const team = props.team;
    const totalBudget = team.reduce((total,player)=>total+player.salary,0);
    return (
        <div>     
            <h2>Total Budget: {totalBudget}</h2>
            <h4>Players added: {team.length}</h4>
            {
                team.map((player)=><TeamPlayer player={player} key={player.id}></TeamPlayer>)
            }

                {/* {
                team.map((player)=><div><h5>Name: {player.name} </h5><p>Salary: <small>{player.salary}</small></p></div>)
                } */}
            
        </div>
    );
};

export default Team;