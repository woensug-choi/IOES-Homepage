import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  Advisor,
  Hero,
  Classes,
  Members,
  World,
} from "../sections";

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../locale/${context.locale}.json`)).default
    }
  };
}

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-10" />
      <Explore />
    </div>
    <div className="relative">
      <Advisor />
      <div className="gradient-04 z-10" />
      <Members />
    </div>
    {/* <World /> */}
    <div className="relative">
      <Classes />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
