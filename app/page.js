import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  Advisor,
  Hero,
  Classes,
  Members,
  Gallery,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <Advisor />
      <div className="gradient-04 z-0" />
      <Members />
      {/* <Gallery /> */}
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

export default Page;
