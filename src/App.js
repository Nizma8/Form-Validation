import { useState } from "react";
import "./App.css";

function App() {
  const intialValue = {
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };
  const [userInput, setUserInput] = useState(intialValue);
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);
  const setAndGetDAta = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };
  const validateForm = () => {
    let valid = true;
    const newError = { ...error };
    // username validation
    if (!userInput.Username) {
      newError.Username = "This field is required";
      valid = false;
    } else if (userInput.Username.length < 3) {
      newError.Username = "Username must be at least 3 characters long.";
      valid = false;
    } else {
      delete newError.Username;
    }
    // Email-id validation
    if (!userInput.Email) {
      newError.Email = "This field is required";
      valid = false;
    } else {
      delete newError.Email;
    }
    // password validation
    if (!userInput.Password) {
      newError.Password = "This field is required";
      valid = false;
    } else if (userInput.Password.length < 8) {
      newError.Password = "Password must be at least 8 characters long.";
      valid = false;
    } else if (
      !userInput.Password.match(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/
      )
    ) {
      newError.Password = "Strong password is required";
      valid = false;
    } else {
      delete newError.Password;
    }
    // confirm password validation
    if (!userInput.ConfirmPassword) {
      newError.ConfirmPassword = "This field is required";
      valid = false;
    } else if (userInput.ConfirmPassword !== userInput.Password) {
      newError.ConfirmPassword = "Passwords do not match.";
      valid = false;
    } else {
      delete newError.ConfirmPassword;
    }

    setError(newError);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    setSubmit(true);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center w-100 "
      style={{ backgroundColor: "#312f2f", height: "100vh", width: "100%" }}
    >
      <div
        className="  rounded-3 my-5  "
        style={{ width: "700px", backgroundColor: "#000000" }}
      >
        {Object.keys(error).length === 0 && submit && (
          <div
            className="mt-3 bg-success px-5  py-3 rounded fw-bolder"
            style={{ width: "35%", height: "60px", marginLeft: "220px" }}
          >
            Login successfull!!!
          </div>
        )}
        <div className="head    text-center mt-2">
          <h2 className="text-light pt-2">Sign up</h2>
        </div>
        <div className="py-2 d-flex justify-content-center align-items-center">
          <form
            className="text-light  w-100 pb-5 px-5 "
            onSubmit={handleSubmit}
          >
            <label htmlFor="uname" className=" d-block mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Your Username"
              className=" d-block mb-2 p-2 rounded"
              id="uname"
              name="Username"
              value={userInput.Username || ""}
              onChange={(e) => {
                setAndGetDAta(e);
              }}
            />
            <div className="text-danger mb-3">{error.Username}</div>

            <label htmlFor="email" className=" d-block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className=" d-block  mb-2 p-2 rounded"
              id="email"
              name="Email"
              value={userInput.Email || ""}
              onChange={(e) => {
                setAndGetDAta(e);
              }}
            />
            <div className="mb-3 text-danger">{error.Email}</div>

            <label htmlFor="pass" className=" d-block mb-1">
              Password
            </label>
            <input
              type="text"
              placeholder="Pick a Strong Password"
              className=" d-block  mb-2 p-2 rounded"
              id="pass"
              name="Password"
              value={userInput.Password}
              onChange={(e) => {
                setAndGetDAta(e);
              }}
            />
            <div className="mb-3 text-danger">{error.Password}</div>

            <label htmlFor="cf" className=" d-block mb-1">
              Confirm Password
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              className=" d-block  mb-2 p-2 rounded"
              id="cf"
              name="ConfirmPassword"
              value={userInput.ConfirmPassword}
              onChange={(e) => {
                setAndGetDAta(e);
              }}
            />
            <div className="mb-3 text-danger">{error.ConfirmPassword}</div>
            <button
              className="btn text-light mt-4 w-75 p-2"
              type="submit"
              style={{ backgroundColor: "	#800080" }}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
