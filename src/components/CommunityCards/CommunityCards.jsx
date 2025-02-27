// -------------- FXNALITY --------------
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
// -------------- COMPONENTS --------------
import SoloCommCard from "../SoloCommCard/SoloCommCard";
// -------------- STYLES --------------
import "./CommunityCards.scss";

function CommunityCards({ communities }) {

  return (
    <section className="community-cards">
      {communities.map((community) => {
        return (
          <Link
            to={`/community/${community.id}`}
            key={community.id}
            className="community-card__link"
          >
            <SoloCommCard community={community} />
          </Link>
        );
      })}
    </section >
  );
}

export default CommunityCards;
