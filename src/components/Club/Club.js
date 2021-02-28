import React from 'react';
import Players from '../Players/Players';
import Team from '../Team/Team';
import './Club.css'

const Club = () => {
    return (
        <div className='club-container'>
          
            <div className="players-container">
                <Players></Players>
            </div>
            <div className="team-container">
                <Team></Team>
            </div>
        </div>
    );
};

export default Club;