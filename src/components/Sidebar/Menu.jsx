import React from "react";
import {
  Code,
  Flame,
  Github,
  Home,
  Image as ImageIcon,
  Instagram,
  Layers,
  Linkedin,
  Scissors,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
  Video,
  X,
  Youtube,
} from "lucide-react";
import MenuItems from "../Menu-items/MenuItems";

const Menu = () => {
  return (
    <div className="flex relative flex-col h-full p-3 bg-my-bg  text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5">
      <MenuItems
        target="_blank"
        link="/"
        effect="slideUp"
        variant="primary"
        sizes="medium"
      >
        <Home />
        Home
      </MenuItems>
      <MenuItems
        target="_blank"
        link="/projects"
        effect="slideUp"
        variant="primary"
        sizes="medium"
      >
        <Code /> Projects
      </MenuItems>
      <MenuItems
        target="_blank"
        link="/skills"
        effect="slideUp"
        variant="primary"
        sizes="medium"
      >
        <Flame />
        Skills
      </MenuItems>

      <div className="mt-4 text-[#8b8a91]">Socials</div>

      <MenuItems
        target="_blank"
        link="https://www.instagram.com/ezsnippet/"
        effect="slideUp"
        variant="primary"
        sizes="medium"
      >
        <Github color="#2a9d8f"/> Github
      </MenuItems>
      <MenuItems
        target="_blank"
        link="https://www.instagram.com/ezsnippet/"
        effect="slideUp"
        variant="primary"
        sizes="medium"
      >
        <Linkedin color="#0277b5"/> LinkedIN
      </MenuItems>
      <MenuItems
        target="_blank"
        link="https://www.instagram.com/ezsnippet/"
        effect="slideUp"
        variant="primary"
        sizes="medium"
      >
        <Instagram color="#b5179e"/> Instagram
      </MenuItems>
      
    </div>
  );
};

export default Menu;
