import React, { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AllTab from "./home";

const UserPage = ({ setIsMenuOpen, isMenuOpen, category, setCategory }) => {
  
  useEffect(() => {
    
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    
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
        <section className="opacity-90 bg-black flex flex-col absolute left-0 top-0 h-screen gap-8 z-50 w-full overflow-y-auto">
          <div className="flex">
            <div className="w-[100%] mx-auto">
              <AllTab
                setCategory={setCategory}
                category={category}
              />
            </div>
            <div className="w-[5%] flex justify-center items-center h-screen">
              <div className="text-white">
                <ArrowBackIosIcon
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer"
                  sx={{ fontSize: "40px" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserPage;
