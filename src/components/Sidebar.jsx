import Logo from "./Sidebar/Logo";
import Menu from "./Sidebar/Menu";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex fixed  w-screen h-screen sm:w-[300px] z-30 bg-my-bg2">
      <div className="toggle flex flex-col lg:m-5 w-full ">
        <Logo/>
        <Menu />
      </div>
    </aside>
  );
};

export default Sidebar;
