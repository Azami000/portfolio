import {
  Header,
  AboutMe,
  Hero,
  Skills,
  Experience,
  Work,
  Contact,
  Footer,
} from "@/components";
const Home = () => {
  return (
    <div className="max-w-8xl mx-auto bg-gray-50 dark:bg-black">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
