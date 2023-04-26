import React, { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Authorization/FirebaseConfig";
import Modal from "react-modal";

import Home from "../Home/Home";

const Signup = () => {
  const { user } = useContext(AuthorizeContext);
  const [accCreationMessage, SetAccCreationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled out
    const { email, password } = e.target.elements;
    if (!email.value || !password.value) {
      setErrorMessage("Please fill out all required fields.");
      openModal();
      return;
    }

    try {
      const userObject = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      console.log(userObject);
      // puttin the user credential s in the local storage and useing  to maintain the session
      window.localStorage.setItem("user", JSON.stringify(userObject.user));
      SetAccCreationMessage("Account created successfully");
      setTimeout(() => {
        navigate("/AccountSetup");
      }, 3000);
    } catch (error) {
      setErrorMessage(error);
    }
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
      {/* <div>
      <Modal isOpen={modalIsOpen}/>
      </div> */}
      <div className="signcover">
        <h1 className="title">Create Account</h1>
        <h3>SIGN IN TO CONTINUE</h3>
        <form className="loginbox" onSubmit={handleSubmit}>
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
          {/* <input
            className="lgInput"
            type="text"
            placeholder="First & Last Name"
            id="name"
            name="name"
            //value={"test1 value"}
          /> */}
          <input
            className="lgInput"
            type="text"
            placeholder="email"
            id="email"
            name="email"
            //value={""}
          />
          <input
            className="lgInput"
            type="password"
            placeholder="password"
            id="password"
            name="password"
            //value=""
          />

          {/* <div className="dropdownbox">
            <select className="dropdownsgn" id="accountType" name="accountType">
              <option value="">Select Account Type</option>
              <option value="restaurant">Restaurant</option>
              <option value="communityOfNeed">Community Of Need</option>
            </select>
          </div> */}

          {/* <input
            className="lgInput"
            type="text"
            placeholder="Restaurant Name"
            id="restaurantName"
            name="restaurantName"
            //value={"Artichoke"}
          /> */}

          <button className="login-btn" type="submit">
            Create account
          </button>
        </form>

        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>

        {/* <span>{accCreationMessage}</span> */}
      </div>
    </div>
  );
};

export default Signup;
