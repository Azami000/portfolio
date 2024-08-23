import { BiCopyright } from "react-icons/bi";
export const Footer = () => {
  return (
    <div className=" flex justify-center py-6 px-20">
      <div className="flex items-center justify-center px-8 gap-16">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-row gap-1 items-center">
            <BiCopyright />
            <span>2023 | Designed and coded with ❤️️ by Sagar Shah</span>
          </div>
        </div>
      </div>
    </div>
  );
};
