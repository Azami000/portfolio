import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const Navigation = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);
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
        <button className="w-9 h-9" onClick={handleTheme}>
          <MdOutlineWbSunny />
        </button>
        <button className="py-1.5 px-4 rounded-full dark:bg-red-500 bg-gray-900 text-white">
          Download CV
        </button>
      </div>
    </div>
  );
};
