import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

export const Contact = () => {
  return (
    <div className="py-24 px-20">
      <div className="px-8 gap-12">
        <div className="flex items-center flex-col gap-4">
          <div className="flex items-center justify-center rounded-full bg-gray-200 w-[120px] h-[40px]">
            Get in touch
          </div>
          <div className="flex flex-col items-center">
            <div>
              What’s next? Feel free to reach out to me if you're looking for
            </div>
            <div> a developer, have a query, or simply want to connect.</div>
          </div>
          <div className="flex gap-14">
            <div className="flex flex-col items-center ">
              <div className="flex items-center flex-row gap-3">
                <CiMail />
                <span className="font-semibold">chaka770@gmail.com</span>
                <span>
                  <button>
                    <IoCopyOutline />
                  </button>
                </span>
              </div>
              <div>
                <div className="flex items-center flex-row gap-3">
                  <FiPhone />
                  <span className="font-semibold">+88928800</span>
                  <span>
                    <button>
                      <IoCopyOutline />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-16 rounded-xl">
            <div className="gap-2">
              <div>You may also find me on these platforms!</div>
              <div className="flex flex-row items-center justify-center ">
                <img src="./kitty.png" alt="" className="w-[24px] h-[24px]" />
                <span>
                  <img src="./twit.png" alt="" className="w-[24px] h-[24px]" />
                </span>
                <span>
                  <img src="./icon3.png" alt="" className="w-[24px] h-[24px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
