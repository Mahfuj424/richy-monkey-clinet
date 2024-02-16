import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MenuIcon from "@mui/icons-material/Menu";
import dynamic from "next/dynamic";
import Headroom from "react-headroom";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { logo, navMenu } from "@/src/constant/navbar/navbar";
import MobileNavbar from "../MobileNavbar";
import UserPage from "../../app/userPage";
const DynamicLink = dynamic(() => import("next/link"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = (
    <>
      {navMenu?.map((item, index) => (
        <DynamicLink key={index} href={item.url}>
          <li className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="text-black text-center space-x-10 lg:flex lg:flex-col hidden"
            >
              <div className="flex items-center gap-1 text-white">
                <p className="text-3xl -mt-3">{item?.icon}</p>
                <p>{item?.title}</p>
                {item?.DROPDOWN.length !== 0 ? (
                  <ArrowDropDownIcon className="-ms-1" />
                ) : (
                  ""
                )}
              </div>
              {item?.DROPDOWN?.length !== 0 ? (
                <div className="relative flex items-center justify-center">
                  <ul
                    tabIndex={0}
                    className={`dropdown-content top-2 z-[999] menu p-5 shadow bg-slate-900 w-60 rounded-md`}
                  >
                    {item?.DROPDOWN?.map((item, index) => (
                      <li key={index}>
                        <Link
                          className="flex text-white hover:bg-primary duration-200 hover:text-white items-center"
                          href={item?.url}
                        >
                          <p className="text-primary mb-3">▄</p>
                          <p>{item?.title}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>

            <p className="text-black text-center font-bold flex lg:hidden">
              <span className="text-3xl">{item?.icon}</span>
              <span>{item?.title}</span>
            </p>
          </li>
        </DynamicLink>
      ))}
    </>
  );

  return (
    // <Headroom>
    <div className="md:opacity-90 fixed z-10 w-full bg-[#000d19]">
      <div className="navbar max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo  */}
        <div>
          <img href={"/"} className="w-40 h-12" src={logo} alt="Logo" />
        </div>

        {/* Large screen  */}
        <div className="hidden lg:flex items-center pt-2">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

        <div>
          <div className="hidden md:flex gap-3 md:items-center">
            {/* Nav item */}
            <div className="flex gap-5 mr-5 text-primary">
              <div  className="cursor-pointer">
                <SearchIcon onClick={()=>setIsMenuOpen(true)}/>
                <UserPage
                  setIsMenuOpen={setIsMenuOpen}
                  isMenuOpen={isMenuOpen}
                />
              </div>
              <div className="cursor-pointer">
                <ShoppingCartIcon onClick={()=>setIsMenuOpen(true)}/>
                <UserPage
                  setIsMenuOpen={setIsMenuOpen}
                  isMenuOpen={isMenuOpen}
                />
              </div>
              <div className="cursor-pointer">
                <PersonAddIcon onClick={()=>setIsMenuOpen(true)}/>
                <UserPage
                  setIsMenuOpen={setIsMenuOpen}
                  isMenuOpen={isMenuOpen}
                />
              </div>
            </div>
          </div>
          {/* dropdown */}
          <div className="dropdown dropdown-end">
            <div
              onClick={() => setIsMenuOpen(true)}
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-primary lg:hidden"
            >
              <MenuIcon
                sx={{ fontSize: "50px", transform: "rotate(180deg)" }}
              />
            </div>
            {/* mobile navbar section */}
            <div>
              <MobileNavbar
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Headroom>
  );
};

export default Navbar;
