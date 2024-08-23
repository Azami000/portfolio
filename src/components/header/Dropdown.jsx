import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

export const Dropdown = () => {
  return (
    <motion.div
      exit={{ left: "100%" }}
      initial={{ left: "100%" }}
      animate={{ right: 0, left: 55 }}
      transition={{ duration: 0.6 }}
      className="fixed top-[68px] bottom-0 bg-red-500"
    >
      
      <div className="text-3xl gap-4 p-4 ">
        <p> About</p>
        <p> Work</p>
        <p> Testimonials</p>
        <p> Contact</p>
      </div>
      <div>
        <p className="flex justify-between text-3xl p-4">
          Switch Theme <MdOutlineWbSunny />
        </p>
        <button className=" flex p-4 items-center py-1.5 px-36 rounded-full bg-gray-900 text-white">
          Download CV
        </button>
      </div>
    </motion.div>
  );
};
