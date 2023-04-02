import React, { useState } from 'react';
import ladderData  from './LadderData';

const Ladder = () => {
  const [ladder] = useState(ladderData);

  return (
    <div>
      <h3 style={{ color: "#a18525" }}>Ladder</h3>
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Team</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {ladder.map((ladder) => (
            <tr key={ladder.ranking}>
              <td>{ladder.ranking}</td>
              <td>{ladder.team}</td>
              <td>{ladder.won}</td>
              <td>{ladder.lost}</td>
              <td>{ladder.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ladder;
