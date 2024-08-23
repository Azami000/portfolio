export const AboutMe = () => {
  return (
    <div className=" bg-gray-100 dark:bg-black flex flex-col items-center py-8 px-8 gap-12 md:py-16 md:px-4">
      <div className="  flex items-center justify-center w-[120px] bg-gray-200  px-5 h-[40px] rounded-full  gap-12">
        About me
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row md:py-24 md:px-20 gap-x-12 ">
        <img src="./myphoto.jpg" alt="" className="w-[400px] h-[480px]" />
        <div className="md:gap-y-6 pt-3">
          <h3 className="text-2xl"> Curious about me? Here you have it:</h3>
          <div>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </div>
          <div>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </div>
          <div>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </div>
          <div>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </div>
          <div>Finally, some quick bits about me.</div>
          <div className=" flex flex-col ">
            <div>
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </div>
            <div>
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </div>
          </div>
          <div>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </div>
        </div>
      </div>
    </div>
  );
};
