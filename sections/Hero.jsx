"use client";

import Image from "next/image";
import styles from "../styles";
import cover from "../public/cover.png";
import KMOU_Circle from "../public/KMOU_Circle.png";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 max-sm:mt-20 pl-6 mb-[-120px]`}>
    {/* CSS entrance animations start on first paint and never reset on scroll. */}
    <div
      className={`${styles.innerWidth} mx-auto flex flex-col isolate`}
    >
      <div className="flex justify-center items-center flex-col relative z-20 hero-font">
        <h1 className={`${styles.heroHeading} hero-title-enter`}>
          IOES Lab.
        </h1>
        <div
          className="flex flex-col justify-center items-center"
        >
          <br />
          <br />
          <p className={`${styles.heroPlain} hero-text-enter`}>
            <span className="text-blue-500/80">I</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500/80 to-purple-100/80">
              ntelligent
            </span>{" "}
            <span className="text-blue-500/80">O</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500/80 to-purple-100/80">
              cean
            </span>
          </p>
          <p className={`${styles.heroPlain} hero-text-enter`}>
            <span className="text-blue-500/80">E</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 to-purple-100/80">
              ngineering
            </span>{" "}
            <span className="text-blue-500/80">S</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 to-purple-100/80">
              ystems
            </span>
          </p>
          <p className={`${styles.heroPlain} hero-text-enter`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 to-purple-100/80">
              Laboratory,
            </span>{" "}
            <span className="text-blue-500/80">KMOU</span>{" "}
          </p>
          <br />
          <div className="w-full flex justify-end mt-[-30px] max-sm:mt-[-25px] -mb-[80px] max-sm:mb-[-50px] max-sm:right-[-30px] -right-20 relative z-30 hero-stamp-enter ">
            <Image
              src={KMOU_Circle}
              alt="KMOU emblem"
              loading="eager"
              placeholder="blur"
              sizes="(max-width: 639px) 80px, (max-width: 1023px) 120px, 180px"
              className="max-sm:max-w-[80px] w-[120px] lg:w-[180px] lg:h-[180px] max-sm:max-h-[80px] h-[120px] object-contain bg-white/80 rounded-full p-1"
            />
          </div>
        </div>
      </div>

      {/* NOTE "-mt-[20px]" means "minus 20px margin top" */}
      <div
        className="relative z-0 w-full md:mt-[20px] mt-[15px] hero-cover-enter"
      >
        <Image
          src={cover}
          alt="cover"
          placeholder="blur"
          priority
          sizes="(min-width: 1536px) 1280px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 24px)"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] relative "
        />

        
      </div>
    </div>
  </section>
);

export default Hero;
