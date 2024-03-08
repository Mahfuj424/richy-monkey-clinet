import { Checkbox } from "@mui/material";
import React, { useState } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "@/firebase/firebase-config";
import UserInfo from "./UserInfo";

const User = () => {
  const [activeForm, setActiveForm] = useState("Sign Up");
  const [currentUser, setCurrentUser] = useState(null);
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
              <div className="mt-7 space-y-5">
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-white mb-2">
                    Your Email Address :
                  </h1>
                  <input
                    className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-white mb-2">
                    Password :
                  </h1>
                  <input
                    className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                    type="text"
                    name=""
                    id=""
                    placeholder="Password"
                  />
                </div>
                <p className="text-white">
                  Are you new here? Please{" "}
                  <span
                    className="cursor-pointer text-yellow-500 underline"
                    onClick={() => handleChangeForm("Sign Up")}
                  >
                    Sign Up
                  </span>
                </p>
                <div className="flex items-center justify-center">
                  <Checkbox className="text-white" {...label} />
                  <h1 className="font-semibold text-lg text-white">
                    Remember Me
                  </h1>
                </div>
                <div className="pt-1">
                  <button className="button w-full">Login</button>
                </div>
                <div>
                  <button className="button w-full" onClick={handleSignIn}>
                    Google
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeForm === "Sign Up" && (
            <div className="">
              <h1 className="text-2xl font-semibold text-white text-center">
                Register
              </h1>
              <p className="w-3/6 mx-auto mt-3 border border-primary text-center"></p>
              <div className="mt-7 space-y-5">
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-white mb-2">
                    Your Name :
                  </h1>
                  <input
                    className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-white mb-2">
                    Your Email Address :
                  </h1>
                  <input
                    className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg font-semibold text-white mb-2">
                    Password :
                  </h1>
                  <input
                    className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
                    type="text"
                    name=""
                    id=""
                    placeholder="Password"
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
                  <button className="button w-full">Register</button>
                </div>
                <div>
                  <button className="button w-full" onClick={handleSignIn}>
                    Google
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <UserInfo setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      )}
    </div>
  );
};

export default User;
