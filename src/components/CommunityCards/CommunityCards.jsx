// -------------- FXNALITY --------------
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
// -------------- COMPONENTS --------------
import SoloCommCard from "../SoloCommCard/SoloCommCard";
// -------------- STYLES --------------
import "./CommunityCards.scss";

function CommunityCards({ communities }) {
  if (!communities) {
    return (
      <div className="loading">
        <svg
          className="loading__wheel"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 16L19 19M18 12H22M8 8L5 5M16 8L19 5M8 16L5 19M2 12H6M12 2V6M12 18V22"
            stroke="#f38181"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3 className="loading__text">Loading User</h3>
      </div>
    );
  }

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
    </section>
  );
}

export default CommunityCards;
