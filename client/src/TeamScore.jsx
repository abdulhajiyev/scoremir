import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Counter from './Counter';

const socket = io('http://localhost:3001');

function TeamScore() {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  useEffect(() => {
    socket.on('updateScores', ({ team1, team2 }) => {
      setTeam1Score(team1);
      setTeam2Score(team2);
    });

    return () => {
      socket.off('updateScores');
    };
  }, []);

  const updateScores = (newTeam1Score, newTeam2Score) => {
    socket.emit('updateScores', { team1: newTeam1Score, team2: newTeam2Score });
  };

  const incrementTeam1 = () => {
    console.log('Increment Team 1');
    const newTeam1Score = team1Score + 1;
    updateScores(newTeam1Score, team2Score);
  };

  const decrementTeam1 = () => {
    console.log('Decrement Team 1');
    const newTeam1Score = team1Score - 1;
    updateScores(newTeam1Score, team2Score);
  };

  const incrementTeam2 = () => {
    console.log('Increment Team 2');
    const newTeam2Score = team2Score + 1;
    updateScores(team1Score, newTeam2Score);
  };

  const decrementTeam2 = () => {
    console.log('Decrement Team 2');
    const newTeam2Score = team2Score - 1;
    updateScores(team1Score, newTeam2Score);
  };
  return (
    <div>
      <Counter team="Team 1" count={team1Score} increment={incrementTeam1} decrement={decrementTeam1} />
      <Counter team="Team 2" count={team2Score} increment={incrementTeam2} decrement={decrementTeam2} />
    </div>
  );
}

export default TeamScore;