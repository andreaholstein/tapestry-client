// -------------- FXNALITY --------------
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
// -------------- STYLES --------------
import "./Welcome.scss";

function Welcome({ user, communities }) {

  return (
    <section className="welcome">
      <div className="welcome__wrap">
        <div className="welcome__content welcome__graphics welcome__graphics--left">
          !
        </div>
        <div className="welcome__text-wrap">
          <h2 className="welcome__content welcome__greeting">
            Welcome back,
            <span className="welcome__name">
              {" "}
              {user.first_name} {user.last_name}
            </span>
            !
          </h2>
          <p className="welcome__alert">
            You have {communities.length} communities waiting for you to check
            in!
          </p>
        </div>
        <div className="welcome__content welcome__graphics welcome__graphics--right">
          !
        </div>
      </div>
    </section>
  );
}

export default Welcome;
