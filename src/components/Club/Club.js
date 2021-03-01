import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import Team from '../Team/Team';
import './Club.css';
import playersData from '../../fakeData/footballPlayers.json';
import { Col, Row } from 'react-bootstrap';
const Club = () => {

    //console.log(playersData);
    const [players, setPlayers] = useState([]);
    const [team, setTeam] = useState([]);

    //add player to Team
    const handleAddPlayer = (player) => {
        //here need to check team.player.id != add.player.id // if id exist then dont add the player to the team again
        const alreadyAdded = team.find((hiredPlayer) => hiredPlayer.id === player.id);

        if (alreadyAdded) {
            alert('This player is already added in Team.');
        } else {
            const newTeam = [...team, player]; //player is an object, newTeam is an array of objects
            setTeam(newTeam);
        }
    };

    //remove player from Team
    const handleRemovePlayer = (player) => {
        const afterRemove = team.filter((hiredPlayer) => hiredPlayer.id !== player.id);
        setTeam(afterRemove);
    };

    //set players data automatic using useEffect()
    useEffect(() => {
        setPlayers(playersData);
    }, []);

    return (
        //using bootstrap        
        <Row>
            <Col xs={8}>
                <div className='playersContainer'>
                    {
                        players.map((player) => <Players player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Players>)
                    }
                </div>
            </Col>
            <Col className="teamContainer">
                <Team team={team} handleRemovePlayer={handleRemovePlayer}></Team>
            </Col>
        </Row>
    );
};

export default Club;