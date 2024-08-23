import { CiShare1 } from "react-icons/ci";

export const Work = () => {
  const works = [
    {
      isReverse: false,
      image: "./picture.png",
      title: "Fiskil",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      techs: [
        "Git",
        "Javascript",
        "Next.js",
        "React",
        "Figma",
        "Node.js",
        "TailwindCss",
        "Cypress",
        "Storybook",
      ],
    },
    {
      isReverse: true,
      image: "./picture.png",
      title: "Fiskil",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      techs: [
        "Git",
        "Javascript",
        "Next.js",
        "React",
        "Figma",
        "Node.js",
        "TailwindCss",
        "Cypress",
        "Storybook",
      ],
    },
    {
      isReverse: false,
      image: "./picture.png",
      title: "Fiskil",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      techs: [
        "Git",
        "Javascript",
        "Next.js",
        "React",
        "Figma",
        "Node.js",
        "TailwindCss",
        "Cypress",
        "Storybook",
      ],
    },
  ];
  return (
    <div className=" flex md:py-24 md:px-20">
      <div className="px-8 gap-12">
        <div className=" flex items-center flex-col gap-4">
          <div className="flex items-center justify-center w-[75px] bg-gray-200  px-5 h-[28px] rounded-full  gap-12">
            Work
          </div>
          <div>Some of the noteworthy projects I have built:</div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-8 pt-6">
            {works.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`flex ${
                    el.isReverse && "md:flex-row-reverse"
                  }  flex-col items-center md:flex-row md:items-start`}
                >
                  <img
                    src={el.image}
                    alt=""
                    className="w-[480px] h-[380px] rounded-xl"
                  />
                  <div className="flex flex-col gap-3 p-12 rounded-xl">
                    <h3 className="font-medium">{el.title}</h3>
                    <p>{el.text}</p>
                    <div className="flex flex-wrap gap-3">
                      {el.techs.map((item, index) => (
                        <div
                          className=" flex items-center justify-center flex-wrap w-[115px] bg-gray-200  px-5 h-[28px] rounded-full gap-1"
                          key={index}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <CiShare1 />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
