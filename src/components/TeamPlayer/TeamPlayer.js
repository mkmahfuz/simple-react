import React from 'react';

const TeamPlayer = (props) => {
    const {name,salary} = props.player;
    return (
        <div>
            <h5>Name : {name}</h5>
            <p>Salary : {salary}</p>
        </div>
    );
};

export default TeamPlayer;