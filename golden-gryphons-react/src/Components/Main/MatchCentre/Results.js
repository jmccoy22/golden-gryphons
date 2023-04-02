import React, { useState } from 'react';
import resultsData from './ResultsData';

const Results = () => {
  const [results] = useState(resultsData);

  return (
    <div>
      <h3 style={{ color: "#a18525" }}>Results</h3>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Opponent</th>
            <th>Score</th>
            <th>W/L</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.round}>
              <td>{result.round}</td>
              <td>{result.opponent}</td>
              <td>{result.score}</td>
              <td>{result.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
