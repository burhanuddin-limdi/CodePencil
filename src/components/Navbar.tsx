import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between bg-[#073642] py-3 px-5 text-[#eee8d5] border-b-[2px] border-[#2aa198]">
      <div className="flex place-items-center space-x-3">
        <img src="/logo.png" alt="" className="aspect-square w-[30px]" />
        <p className="text-lg">CODEPENCIL</p>
      </div>
    </nav>
  );
};
