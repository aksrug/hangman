//import React from 'react';
import PropTypes from 'prop-types';

export default function Scoreboard({ wins, losses }) {
  return (
    <div className="scoreboard">
      <p>Wins: {wins}</p>
      <p>Losses: {losses}</p>
    </div>
  );
}

Scoreboard.propTypes = {
  wins: PropTypes.number.isRequired,   
  losses: PropTypes.number.isRequired, 
};

