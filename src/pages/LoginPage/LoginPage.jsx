import LoginCard from "../../components/LoginCard/LoginCard";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <section className="login-page">
      <LoginForm />
      <LoginCard />
    </section>
  );
}

export default LoginPage;
