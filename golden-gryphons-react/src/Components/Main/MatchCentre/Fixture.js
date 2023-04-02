import React, { useState } from 'react';
import fixtureData from './FixtureData';

const Fixture = () => {
  const [fixtures] = useState(fixtureData);

  return (
    <div>
      <h3 style={{ color: "#a18525" }}>Fixture</h3>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Date</th>
            <th>Time</th>
            <th>Team</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixture) => (
            <tr key={fixture.round}>
              <td>{fixture.round}</td>
              <td>{fixture.date}</td>
              <td>{fixture.time}</td>
              <td>{fixture.team}</td>
              <td>{fixture.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fixture;
