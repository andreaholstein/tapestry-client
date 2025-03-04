import LoginImage from "../../assets/Images/LoginImage";
import "./LoginCard.scss"

function LoginCard() {
  return (
    <article className="login-card">
      <h1 className="login-card__heading">Welcome back!</h1>
      <p className="login-card__slogan">
        Log in to connect the threads of your life...
      </p>
      <LoginImage />
      <p className="login-card__text">
        The one stop social hub for all of your communities! Stay connected and
        never miss an update!
      </p>
    </article>
  );
}

export default LoginCard;
