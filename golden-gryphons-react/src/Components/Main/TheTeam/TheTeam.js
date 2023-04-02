import React from "react";

import Players from "./Players/Players";
import Coaches from "./Coaches/Coaches";

export default function TheTeam() {
    return (
      <div className="TheTeam">
        <section id ="theteam">
        <h1 style={{ color: "#a18525" }}>The Team</h1>
        <h2 style={{ color: "#a18525" }}>Players</h2>
        <Players />
        <br/>
        <h2 style={{ color: "#a18525" }}>Coaches</h2>
        <Coaches />
        <br/>
        <br/>
        <div className='back-to-top'>
        <a href="#navigation" className="back-to-top">Back to top</a>
        </div>
        </section>
      </div>
    )
  }