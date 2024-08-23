import React from "react";

export const Experience = () => {
  //   const t = "Sr.Fronetned";
  //   const ts = ["Lorem", "Ut", "Sed", "Lorem ipsum"];
  //   const arr = [
  //     {
  //       name: "Sr. Frontend Developer",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     },
  //   ];

  return (
    <div className="py-20 px-24">
      <div className="px-8 gap-12 flex flex-col">
        <div className="flex items-center flex-col gap-4">
          <div className="flex items-center justify-center rounded-full bg-gray-200 w-[120px] h-[40px]">
            Experince
          </div>
          <div>Here is a quick summary of my most recent experiences:</div>
        </div>
        {/* {arr.map((el, index) => {
          return ( */}
        <div className="flex items-center justify-center p-8 rounded-2xl bg-slate-100">
          <div className="flex  justify-center flex-col md:flex-row gap-12">
            <div className="text-lime-500">upwork</div>
            <div>
              <h1>Sr.Frontend Developer</h1>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

              {/* <h2>{el.name}</h2>
                  <ul>
                    {(texts || ts).map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </ul> */}
            </div>
            <div className="flex md:flex-col">
              Nov 2021 - Present
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-8 rounded-2xl bg-slate-100">
          <div className="flex  justify-center flex-col md:flex-row gap-12">
            <div className="text-lime-500">upwork</div>
            <div>
              <h1>Sr.Frontend Developer</h1>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

              {/* <h2>{el.name}</h2>
                  <ul>
                    {(texts || ts).map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </ul> */}
            </div>
            <div className="flex flex-col md:flex-row">
              Nov 2021 - Present
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-8 rounded-2xl bg-slate-100">
          <div className="flex  justify-center flex-col md:flex-row gap-12">
            <div className="text-lime-500">upwork</div>
            <div>
              <h1>Sr.Frontend Developer</h1>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

              {/* <h2>{el.name}</h2>
                  <ul>
                    {(texts || ts).map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </ul> */}
            </div>
            <div className="flex flex-col">
              Nov 2021 - Present
            </div>
          </div>
        </div>
        {/* );
        })} */}
      </div>
    </div>
  );
};
