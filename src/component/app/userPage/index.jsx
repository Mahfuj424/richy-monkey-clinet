import React, { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AuthenticationPage from "./home";

const UserPage = ({ setIsMenuOpen, isMenuOpen, category, setCategory }) => {
  useEffect(() => {
    // Add or remove a class to the body based on the menu state
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    // Cleanup: Remove the class when the component unmounts or when the menu closes
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  return (
    <div>
      <div
        className={`fixed h-screen w-screen bg-black/30 top-0 right-0 -translate-x-full duration-700 ${
          isMenuOpen && "translate-x-0"
        }`}
      >
        <section className="opacity-90 bg-black flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full overflow-y-auto">
          <div>
            <div>
              <AuthenticationPage
                setCategory={setCategory}
                category={category}
              />
            </div>
            <div className="flex mt-40 text-white justify-end">
              <ArrowBackIosIcon
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
                sx={{ fontSize: "40px" }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserPage;
