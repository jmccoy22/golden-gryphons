import React from "react";

import TheTeam from "./TheTeam/TheTeam";
import MatchCentre from "./MatchCentre/MatchCentre";
import TicketsMembership from "./TicketsMembership/TicketsMembership";
import News from "./News/News";
import Merchandise from "./Merchandise/Merchandise";
import Community from "./Community/Community"

export default function Main() {
    return (
      <div className="Main">
        <TheTeam />
        <MatchCentre />
        <TicketsMembership />
        <News />
        <Merchandise />
        <Community />

      </div>
    )
  }