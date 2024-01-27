import { createdBy, footerData } from "@/src/constant/footer";
import { logo } from "@/src/constant/navbar/navbar";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-0 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto">
        {footerData.map((data, index) => (
          <div key={index} className="text-white">
            <h1 className="text-lg font-semibold">{data?.category}</h1>
            <div className="mt-8">
              {data?.categoryList?.map((category, index) => (
                <div key={index} className="mb-3">
                  <p className="cursor-pointer hover:text-primary duration-200">
                    {category?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {
        // sortCategory.map(category=> <p>{category}</p>)
      }
      <div className="text-white text-center flex justify-center py-5">
        <div>
          <div>
            <img className="mx-auto w-40 h-12" src={logo} alt="logo" />
          </div>
          <p className="my-5">All right reserved © {new Date().getFullYear()}</p>
          <p>{createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
