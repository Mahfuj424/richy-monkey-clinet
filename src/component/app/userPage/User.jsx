import { Checkbox } from "@mui/material";
import React, { useRef, useState } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { app } from "@/firebase/firebase-config";
import UserInfo from "./UserInfo";

const User = () => {
  const [activeForm, setActiveForm] = useState("Sign Up");
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setCurrentUser(result?.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // sign up with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("image");

    const data = new FormData();
    data.append("image", image);

    fetch(
      `https://api.imgbb.com/1/upload?key=20d1c8d996641e7f8f7de1db621a33ec`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data.url);
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            setCurrentUser(result.user);
            handleUpdateData(result.user, name, data.data.url);
          })
          .catch((err) => {
            console.log(err.message);
          });
        console.log(name, email, password, data.data.url);
      });
  };

  const handleUpdateData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err.message));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setCurrentUser(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      setError("please provide your email before reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        alert("please check your mail");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleChangeForm = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="mt-10">
      {!currentUser ? (
        <div className="w-3/6 mx-auto">
          {activeForm === "Sign In" && (
            <div className="">
              <h1 className="text-2xl font-semibold text-white text-center">
                Login
              </h1>
              <p className="w-3/6 mx-auto mt-3 border border-primary text-center"></p>
              <form onSubmit={handleSignInSubmit} className="mt-7 space-y-5">
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-white mb-2">
                    Your Email Address :
                  </h1>
                  <input
                    className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                    type="text"
                    name="email"
                    ref={emailRef}
                    id=""
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-white mb-2">
                    Password :
                  </h1>
                  <input
                    className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                    type="text"
                    name="password"
                    id=""
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white">
                    Are you new here? Please{" "}
                    <span
                      className="cursor-pointer text-yellow-500 underline"
                      onClick={() => handleChangeForm("Sign Up")}
                    >
                      Sign Up
                    </span>
                  </p>
                  <p
                    onClick={handleResetPassword}
                    className="btn btn-link text-primary"
                  >
                    Reset Password
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <h1 className="text-red-500">{error}</h1>
                </div>
                <div className="pt-1">
                  <input
                    type="submit"
                    value={"Login"}
                    className="button w-full"
                  />
                </div>
                <div>
                  <button className="button w-full" onClick={handleSignIn}>
                    Google
                  </button>
                </div>
              </form>
            </div>
          )}
          {activeForm === "Sign Up" && (
            <div className="">
              <h1 className="text-2xl font-semibold text-white text-center">
                Register
              </h1>
              <p className="w-3/6 mx-auto mt-3 border border-primary text-center"></p>
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="w-full flex gap-5 items-center">
                  <div className="w-full">
                    <h1 className="text-lg font-semibold text-white mb-2">
                      Your Name :
                    </h1>
                    <input
                      className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <h1 className="text-lg font-semibold text-white mb-2">
                      Image :
                    </h1>
                    <input
                      className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                      type="file"
                      name="image"
                      id=""
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-white mb-2">
                    Your Email Address :
                  </h1>
                  <input
                    className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                    type="text"
                    name="email"
                    id=""
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-white mb-2">
                    Password :
                  </h1>
                  <input
                    className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <p className="text-white">
                  You have already an account? Please{" "}
                  <span
                    className="cursor-pointer text-yellow-500 underline"
                    onClick={() => handleChangeForm("Sign In")}
                  >
                    Sign in
                  </span>
                </p>
                <div>
                  <input
                    type="submit"
                    value={"Register"}
                    className="button w-full"
                  />
                </div>
                <div>
                  <button className="button w-full" onClick={handleSignIn}>
                    Google
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      ) : (
        <UserInfo
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          auth={auth}
        />
      )}
    </div>
  );
};

export default User;
