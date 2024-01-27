import React from "react";

const SectionTitle = ({title, icon}) => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="flex justify-start">
          <div className="flex items-center gap-5">
            <h1>
              {icon}
            </h1>
            <h1 className="md:text-4xl text-2xl text-start uppercase font-bold text-white">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
