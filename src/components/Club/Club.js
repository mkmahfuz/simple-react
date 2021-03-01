import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import Team from '../Team/Team';
import './Club.css';
import playersData from '../../fakeData/footballPlayers.json';
import {Col, Row } from 'react-bootstrap';
const Club = () => {
    
    //console.log(playersData);
    const [players,setPlayers] = useState([]);
    const [team,setTeam] = useState([]);
    //add player to Team
    const handleAddPlayer = (player)=>{
        //here need to check team.player.id != add.player.id // if id exist then dont add the palyer to the team again
        const alreadyAdded = team.find((hiredPlayer)=>hiredPlayer.id === player.id);
        //console.log(alreadyAdded)
        if(alreadyAdded){
            alert('This player is already added in Team.');
        }else{        
        const newTeam = [...team,player]; //player is an object, newTeam is an array of objects
        setTeam(newTeam);
        }
    };
    //remove player from Team
    const handleRemovePlayer = (player)=>{
    //console.log(player.id)
    const afterRemove = team.filter((hiredPlayer)=>hiredPlayer.id !== player.id);
        setTeam(afterRemove);
        //console.log(afterRemove)
    };

    useEffect(()=>{
        setPlayers(playersData);
    },[]);

    return (
        //using bootstrap        
            <Row>
                <Col  xs={8}>                 
                     <div className='players-container'>
                {
                    players.map((player)=><Players player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Players>)
                }
                </div> 
                </Col>
                <Col className="team-container">
                     <Team team={team} handleRemovePlayer={handleRemovePlayer}></Team>
                </Col>
            </Row>
       
        // <div className='club-container'>
          
        //     <div className="players-container">
        //         {
        //             players.map((player)=><Players player={player} key={player.id} handleAddPlayer={handleAddPlayer} ></Players>)
        //         }
                
        //     </div>
        //     <div className="team-container">
        //         <Team team={team} handleRemovePlayer={handleRemovePlayer}></Team>
        //     </div>
        // </div>
    );
};

export default Club;