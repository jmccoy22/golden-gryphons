import React, { useState } from 'react';
import Fixture from './Fixture';
import Ladder from './Ladder';
import Results from './Results';

function FixtureLadderResults() {
  const [activeTab, setActiveTab] = useState('fixture');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <section id ="match_centre"/>
      <h1 style={{ color: "#a18525" }}>Match Centre</h1>
      <div className='back-to-top'>
      <a href="#navigation" className="back-to-top">Back to top</a>
      </div>
      <br/>
      <div className="tabs">
        <button className={activeTab === 'fixture' ? 'active' : ''} onClick={() => handleTabClick('fixture')}>Fixture</button>
        <button className={activeTab === 'ladder' ? 'active' : ''} onClick={() => handleTabClick('ladder')}>Ladder</button>
        <button className={activeTab === 'results' ? 'active' : ''} onClick={() => handleTabClick('results')}>Results</button>
      </div>
      {activeTab === 'fixture' && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Fixture />
        </div>
      )}
      {activeTab === 'ladder' && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Ladder />
        </div>
      )}
      {activeTab === 'results' && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Results />
        </div>
      )}
    </div>
    
  );
}

export default FixtureLadderResults;
