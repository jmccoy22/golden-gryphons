import React, { useState } from 'react';

const profiles = [
  {
    id: 1,
    name: "Yvonne Carme",
    image: require("./images/yvonne.jpg"),
    about: "Yvonne is the Head Coach of the Golden Gryphons. She has been with the club for 15 years. In her spare time she enjoys gardening.",

  },
  {
    id: 2,
    name: "Roberta Ferne",
    image: require("./images/roberta.jpg"),
    about: "Roberta is Assistant Coach and has been with the club for 7 years. Her passion is baking",

  },
  {
    id: 3,
    name: "Elsie Rene",
    image: require("./images/elsie.jpg"),
    about: "Elsie is 2nd Assistant Coach and has been with the club for 2 years. She enjoys spending time with her horses Whinny and Piglet.",
  },

];

const ProfileCard = ({ profile }) => {

  return (
    <div className="profile-card">
      <img className="profile-image" src={profile.image} alt={profile.name} />
      <div className="profile-content">
        <h2>{profile.name}</h2>
        <p>{profile.about}</p>
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