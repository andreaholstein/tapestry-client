import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { baseURL } from "../../utils/api";
import axios from "axios";
import "./SignupForm.scss";

function SignupForm() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors && name !== "") {
      setErrors({});
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email =
        "The email address is not valid. Expected format: x@x.xx";
    }

    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${baseURL}users/register`;

    if (!validateForm()) {
      console.log("validation failed:", errors);
      return;
    }
    try {
      await axios.post(url, {
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };    

  return (
    <article className="signup-form">
      <h1 className="signup-form__title">Sign up today!</h1>
      <p className="signup-form__text">Already have an account? <Link to={"/login"} className="signup-form__link">Log in</Link></p>
      <form action="" className="signup-form__form" onSubmit={handleSubmit}>
        {[
          { label: "First Name", name: "first_name" },
          { label: "Last Name", name: "last_name" },
          { label: "Create Username", name: "username" },
          { label: "Email Address", name: "email" },
          { label: "Password", name: "password" },
          { label: "Confirm Password", name: "confirm_password" },
        ].map(({ label, name }) => (
          <div className="signup-form__functions" key={name}>
            <p className="signup-form__label">{label}</p>
            <input
              type={
                name === "password" || name === "confirm_password"
                  ? "password"
                  : "text"
              }
              className="signup-form__input"
              name={name}
              onChange={(e) => handleChange(e)}
            />
            {errors[name] && (
              <div className="signup-form__error-message">
                <svg
                  className="signup-form__error-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill="#C94515"
                  />
                </svg>
                <p className="signup-form__error">{errors[name]}</p>
              </div>
            )}
          </div>
        ))}
        {success && (
          <p className="signup-form__success">
            Success! Redirecting to login page...
          </p>
        )}
        <button className="signup-form__button" type="submit">
          Create Account
        </button>
      </form>
    </article>
  );
}

export default SignupForm;
