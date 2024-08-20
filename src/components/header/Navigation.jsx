import { MdOutlineWbSunny } from "react-icons/md";

export const Navigation = () => {
  return (
    <div className="hidden md:flex items-center gap-x-6">
      <a href="" className="py-1.5">
        About
      </a>
      <a href="" className="py-1.5">
        Work
      </a>
      <a href="" className="py-1.5">
        Testimoniols
      </a>
      <a href="" className="py-1.5">
        Contact
      </a>

      <div className="border border-l h-6 border-gray-200" />
      <div className="flex items-center gap-x-1.5">
        <button className="w-9 h-9">
          <MdOutlineWbSunny />
        </button>
        <button className="py-1.5 px-4 rounded-full bg-gray-900 text-white">
          Download CV
        </button>
      </div>
    </div>
  );
};
