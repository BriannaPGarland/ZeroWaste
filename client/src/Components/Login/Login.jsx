import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
//import { Navbar } from "../Navbar/Navbar";
import Modal from "react-modal";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Please enter email and password.");
      openModal();
      return;
    }
    window.localStorage.setItem("user", JSON.stringify(email));
    navigate("/home");
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      top: "30%",
      left: "30%",
      right: "30%",
      bottom: "auto",
      marginRight: "-30%",
      transform: "translate(-30%, -30%)",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      padding: "20px",
      backgroundColor: "#fff",
      color: "red",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#FF0000";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="loginpage">
      {/* <div className="navbar">
        < Navbar />
      </div> */}
      <div className="Logincover">
        <h1 className="title">Login</h1>
        <h3 className="text">SIGN IN TO CONTINUE</h3>
        <form className="loginbox" onSubmit={handleLogin}>
          {errorMessage.length > 0 && (
            <h2>
              <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
                onRequestClose={closeModal}
              >
                <h2 style={{ backgroundColor: "white", textAlign: "center" }}>
                  Error
                </h2>
                <p
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  {errorMessage}
                </p>
                <button
                  style={{
                    display: "block",
                    margin: "0 auto",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                  }}
                  onClick={closeModal}
                >
                  Close
                </button>
              </Modal>
            </h2>
          )}
          <input
            className="lgInput"
            type="text"
            placeholder="email"
            // value={"siddhantkumar052@gmail.com"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="lgInput"
            type="password"
            placeholder="password"
            // value="test1passwed88#"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        {/* {errorMessage && <p className="error">{errorMessage}</p>} */}
        <p className="text">Or Login using</p>
        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>
        <Link to="/Signup">
          <div className="signup">Create a new account</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
