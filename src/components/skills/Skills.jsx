export const Skills = () => {
  const icons = [
    { image: "/icon-git.png", techName: "Git" },
    { image: "/icon-figma.png", techName: "Figma" },
    { image: "/icon-javscript.png", techName: "Javascript" },
    { image: "/icon-mongodb.png", techName: "Mongodb" },
    { image: "/icon-nextjs.png", techName: "Next.js" },
    { image: "/icon-nodejs.png", techName: "Node.js" },
    { image: "/icon-postgresql.png", techName: "PostgreSQL" },
    { image: "/icon-react.png", techName: "React" },
    { image: "/icon-sass.png", techName: "Sass/Scss" },
    { image: "/icon-tailwindcss.png", techName: "Tailwindcss" },
    { image: "/cypress.png", techName: "Cypress" },
    { image: "/icon-storybook.png", techName: "Storybook" },
    { image: "/icon-typescript.png", techName: "Typescript" },
    { image: "/icon-express.png", techName: "Express" },
    { image: "/icon-nest.png", techName: "Nest" },
    { image: "/icon-socket.png", techName: "Socket.io" },
  ];

  return (
    <div className="bg-slate-50 md:py-20 md:px-24 gap-16 flex flex-col dark:bg-black py-16 px-4">
      <div className=" flex flex-col items-center py-6 gap-12">
        <div className=" flex items-center flex-col gap-4">
          <div className="flex items-center justify-center w-[75px] bg-gray-200  px-5 h-[28px] rounded-full  gap-12">
            Skills
          </div>
          <div>The skills, tools and technologies I am really good at:</div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-16">
          {icons.map(({ image, techName }, index) => (
            <div className="w-[88px] h-[100px] gap-2" key={index}>
              <img src={image} alt="" />
              <p>{techName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
