import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const UserPage = ({ setIsMenuOpen, isMenuOpen }) => {
    console.log(isMenuOpen);
  return (
    <div>
      <div
        className={`fixed h-screen w-screen bg-black/30 top-0 right-0 -translate-x-full duration-500 ${
          isMenuOpen && "translate-x-0"
        }`}
      >
        <section className="text-black bg-yellow-800 flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full overflow-y-auto">
          <div onClick={() => setIsMenuOpen(false)}>
            <CloseIcon className="cursor-pointer" sx={{ fontSize: "50px" }} />
          </div>
          <div>
            <h1 className="text-4xl font-bold text center">
              this is user page{" "}
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserPage;
