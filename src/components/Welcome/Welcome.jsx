// -------------- FXNALITY --------------
// -------------- ICONS --------------
import Donut from "../../assets/images/Donut.jsx"
import Star from "../../assets/images/Star.jsx"
import MusicNote from "../../assets/images/MusicNote.jsx"
import Heart from "../../assets/images/Heart.jsx"

// -------------- STYLES --------------
import "./Welcome.scss";

function Welcome({ user, communities }) {

  return (
    <section className="welcome">
      <div className="welcome__wrap">
        <div className="welcome__content welcome__graphics welcome__graphics--left">
          <div className="welcome__graphics--svg welcome__graphics--L-big-star">
            <Star />
          </div>
          <div className="welcome__graphics--svg welcome__graphics--L-star">
            <Star />
          </div>
          <div className="welcome__graphics--snug-wrap">
            <div className="welcome__graphics--svg welcome__graphics--heart">
              <Heart />
            </div>
            <div className="welcome__graphics--svg welcome__graphics--music">
              <MusicNote />
            </div>
          </div>
        </div>
        <div className="welcome__text-wrap">
          <h2 className="welcome__content welcome__greeting">
            Welcome back,
            <span className="welcome__content welcome__name">
              {" "}
              {user.first_name} {user.last_name}
            </span>
          </h2>
          <p className="welcome__content welcome__alert">
            You have {communities.length} communities waiting for you to check
            in!
          </p>
        </div>
        <div className="welcome__content welcome__graphics welcome__graphics--right">
          <div className="welcome__graphics--svg welcome__graphics--R-star">
            <Star />
          </div>
          <div className="welcome__graphics--svg welcome__graphics--donut">
            <Donut />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
