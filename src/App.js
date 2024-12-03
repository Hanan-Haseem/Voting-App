import React, { useState } from 'react';
import './App.css';


import player1Image from './images/p1.jpg';
import player2Image from './images/p2.jpg';
import player3Image from './images/p3.jpg';

const playersData = [
  { id: 1, name: 'Virat Kohli', country: 'India', votes: 0, image: player1Image },
  { id: 2, name: 'Dasun Shanaka', country: 'Sri Lanka', votes: 0, image: player2Image },
  { id: 3, name: 'Glenn Maxwell', country: 'Australia', votes: 0, image: player3Image },
];

function App() {
  const [players, setPlayers] = useState(playersData);

  const handleVote = (playerId) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId ? { ...player, votes: player.votes + 1 } : player
      )
    );
  };

  return (
    <div className="App">
      <h1>Cricket Player Voting</h1>
      <div className="players-container">
        {players.map((player) => (
          <div key={player.id} className="player-card">
            <img src={player.image} alt={player.name} />
            <div className="player-info">
              <h2>{player.name}</h2>
              <p>{player.country}</p>
            </div>
            <div className="votes-section">
              <p>Votes: {player.votes}</p>
              <button onClick={() => handleVote(player.id)}>Vote</button>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
      <p>&copy; 2024 All rights reserved - Hanan Haseem(ICT/21/847)</p>
      </footer>
    </div>
  );
}

export default App;
