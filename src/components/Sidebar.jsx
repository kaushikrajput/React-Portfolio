import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex fixed bg-my-bg w-screen h-screen sm:w-[300px] z-30">
      <div className="toggle flex flex-col lg:m-5 w-full">
        <Menu />
      </div>
    </aside>
  );
};

export default Sidebar;
