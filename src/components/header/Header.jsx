import { IoMenu } from "react-icons/io5";
import { Navigation } from "./Navigation";
import { useState } from "react";
import { Dropdown } from ".";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const clickButton = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex justify-between items-center py-4  px-4 md:px-20 h-[68px]">
      <span className="whitespaces-nowrap">{"<SS/>"}</span>
      <button onClick={clickButton} className="block md:hidden">
        {toggle ? <IoClose /> : <IoMenu />}
      </button>
      <Navigation />

      {toggle && <Dropdown />}
    </div>
  );
};
