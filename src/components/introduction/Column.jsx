import { IoLocationOutline } from "react-icons/io5";

export const Column = () => {
  return (
    <div className="flex flex-col-reverse items-center md:items-start md:flex-row">
      <div className=" flex px-8 py-8 gap-y-12 flex-col">
        <h1 className="flex text-4xl font-bold gap-2">
          Hi,I'm Chaka
          <span>
            <img src="./hi.png" alt="" className="w-10 h-10" />
          </span>
        </h1>
        <p className="text-2xl font-weiht:800 ">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="flex flex-col">
          <div className=" flex flex-row items-center h-[56px] gap-2 ">
            <IoLocationOutline /> <span>Ahmadabad,India</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src="./dot.jpg" alt="" className="w-4 h-4" />
            <span>Available for new projects</span>
          </div>
        </div>
        <div className=" flex flex-row gap-1 w-9 h-9">
          <img src="./kitty.png" alt="" />
          <img src="./twit.png" alt="" />
          <img src="./icon3.png" alt="" />
        </div>
      </div>
      <div className="w-[320px] shrink-0 h-[360px] border-8 top:40px left:120px bg-gray-200 ">
        <img src="./myphoto.jpg" alt="" className="w-[280px] h-[320px]" />
      </div>
    </div>
  );
};
