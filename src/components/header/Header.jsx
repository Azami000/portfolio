import { IoMenu } from "react-icons/io5";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-4  px-4 md:px-20 h-[68px]">
      <span className="whitespaces-nowrap">{"<SS/>"}</span>
      <IoMenu className="block md:hidden" />
      <Navigation />
    </div>
  );
};
