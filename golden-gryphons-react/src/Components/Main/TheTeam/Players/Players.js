import React, { useState } from 'react';
import profiles from './Profiles';


const ProfileCard = ({ profile }) => {
  const hasGoalsStat = profile.positions.includes("GS") || profile.positions.includes("GA");
  const hasReboundsStat = profile.positions.includes("GS") || profile.positions.includes("GA") || profile.positions.includes("GD") || profile.positions.includes("GK");

  return (
    <div className="profile-card">
      <img className="profile-image" src={profile.image} alt={profile.name} />
      <div className="profile-content">
        <h2>{profile.name}</h2>
        <p>{profile.about}</p>
        <ul style={{ listStyle: 'none' }}>
          <li><strong>Positions:</strong> {profile.positions.join(", ")}</li>
        </ul>
        <h3>Statistics</h3>
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>Stat</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {profile.stats.map(stat => (
              (stat.label === "Goals scored" && !hasGoalsStat) ||
              (stat.label === "Rebounds" && !hasReboundsStat)
                ? null
                : <tr key={stat.label}>
                    <td>{stat.label}</td>
                    <td>{stat.value}</td>
                  </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


const TabbedProfiles = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const handleTabClick = tabIndex => {
    setActiveTab(tabIndex);
  };

  const activeProfile = activeTab >= 0 ? profiles[activeTab] : undefined;

  return (
    <div className="tabbed-profiles">
      <div className="tab-list">
        {profiles.map((profile, index) => (
          <button
            key={profile.id}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {profile.name}
          </button>
        ))}
      </div>
      <div className="profile-container">
        <div className="profile-card">
          {activeProfile && <ProfileCard profile={activeProfile} />}
        </div>
      </div>
    </div>
  );
};

export default TabbedProfiles;