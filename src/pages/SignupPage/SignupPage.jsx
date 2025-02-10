import SignupCard from "../../components/SignupCard/SignupCard";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./SignupPage.scss"

function SignupPage() {
  return (
    <section className="signup-page">
      <SignupCard />
      <SignupForm />
    </section>
  );
}

export default SignupPage;
