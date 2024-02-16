import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { mobileNavMenu } from "@/src/constant/navbar/mobileNav";

const MobileNavbar = ({ setIsMenuOpen, isMenuOpen }) => {
console.log(isMenuOpen);
  return (
      <div>
        <div
          className={`fixed h-screen w-screen bg-black/30 lg:hidden backdrop-blur-sm top-0 right-0 -translate-x-full duration-500 ${
            isMenuOpen && "translate-x-0"
          }`}
        >
          <section className="text-black bg-primary flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-3/4 overflow-y-auto">
            <div onClick={() => setIsMenuOpen(false)}>
              <CloseIcon className="cursor-pointer" sx={{ fontSize: "50px" }} />
            </div>
            <div>
              {mobileNavMenu.map((item, index) => (
                <Link key={index} href={item?.url}>
                  <p className="py-4 pb-5 ps-3 text-lg font-semibold text-white border-b border-black">
                    {item?.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
  );
};

export default MobileNavbar;
