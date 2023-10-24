import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ScoreComponent from './ScoreComponent';

const socket = io('http://localhost:3001');

export default function DisplayScores() {
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

  return (
    <div>
      <ScoreComponent />
      <div>
        <p>Team 1 Score: {team1Score}</p>
        <p>Team 2 Score: {team2Score}</p>
      </div>
    </div>
  );
}
