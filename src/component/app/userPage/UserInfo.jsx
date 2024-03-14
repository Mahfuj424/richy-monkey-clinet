import React from "react";
import { getAuth, signOut } from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout";

const UserInfo = ({ setCurrentUser, currentUser, auth }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setCurrentUser(null);
        console.log(result);
      })
      .catch((error) => {
        alert(error?.message);
      });
  };

  return (
    <div className="mt-10 w-3/4 mx-auto overflow-y-auto">
      <div className="text-white text-xl font-semibold flex justify-between bg-[#32220c] py-5 px-5 rounded-t-md">
        <h1>Image</h1>
        <h1>Name</h1>
        <h1>Email</h1>
        <h1>Action</h1>
      </div>
      <div className="mt-5 mx-5 text-primary text-xl flex justify-between items-center">
        <div>
          <img
            className="w-20 h-20 rounded-full"
            src={currentUser?.photoURL}
            alt="profile"
          />
        </div>
        <h1>{currentUser?.displayName}</h1>
        <h1>{currentUser?.email}</h1>
        <div>
          <button className="button" onClick={handleSignOut}>
            LogOut <LogoutIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
