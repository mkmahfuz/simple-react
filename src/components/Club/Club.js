import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import Team from '../Team/Team';
import './Club.css';
import playersData from '../../fakeData/footballPlayers.json';
const Club = () => {
    
    //console.log(playersData);
    const [players,setPlayers] = useState([]);
    const [team,setTeam] = useState([]);
    const handleAddPlayer = (player)=>{
        //TODO---here need to check team.id != player.id // if id exist then dont add the palyer to the team again
        const newTeam = [...team,player]; //player is an object, newTeam is an array of objects
        setTeam(newTeam);
        console.log(newTeam)
    };

    useEffect(()=>{
        setPlayers(playersData);
    },[]);

    return (
        <div className='club-container'>
          
            <div className="players-container">
                {
                    players.map((player)=><Players player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Players>)
                }
                
            </div>
            <div className="team-container">
                <Team team={team}></Team>
            </div>
        </div>
    );
};

export default Club;