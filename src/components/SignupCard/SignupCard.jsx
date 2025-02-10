import SignupImage from "../../assets/Images/SignupImage";
import "./SignupCard.scss"

function SignupCard() {
  return (
    <article className="signup-card">
      <h1 className="signup-card__heading">Welcome to Tapestry!</h1>
      <p className="signup-card__slogan">
        Where you can connect the threads of your life...
      </p>
      <SignupImage />
      <p className="signup-card__text">
        The one stop social hub for all of your communities! Stay connected and
        never miss an update!
      </p>
    </article>
  );
}

export default SignupCard;
