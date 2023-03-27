import React from "react";
import './Navigation.css';

const NavLinks = () => {

  const navItems = [
    { name:"The Team", url: "#theteam" }, 
    { name:"Match Centre", url: "#match_centre" },
    { name: "Tickets & Membership", url:"#tickets_membership" },
    { name: "News", url:"#news" },
    { name: "Merchandise", url:"#merchandise" },
    { name: "Community", url:"#community" },
  ];

  const navList = navItems.map((nav, index) => (
    <li key={index}>
      <a href={nav.url}>{nav.name}</a>
    </li>
  ));

  return (
    <div>
      <section id = "navigation">
        <ul className = "navigation-list">
          {navList}
        </ul>
      </section>
    </div>
    );
};

export default NavLinks;
