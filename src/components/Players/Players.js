
import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';

const Players = (props) => {
    const { id, name, salary, image } = props.player;
    return (
        //using fontawesome icon inside button
        //using bootstrap cards
        <Card style={{ width: '16rem' }} className='text-center my-3'>
            <Card.Header>Jersy No: {id}</Card.Header>
            <Card.Img variant="top" src={image} className='w-50 m-auto' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Salary: &euro; {salary}</Card.Subtitle>
                <Card.Text>  </Card.Text>
                <Button variant="primary" block onClick={() => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon><span style={{ margin: '10px' }}>Add to Team</span></Button>
            </Card.Body>
        </Card>
    );
};

export default Players;