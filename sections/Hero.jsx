"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import stamp from "../public/stamp.png";
import cover from "../public/cover.png";
import KMOU_Circle from "../public/KMOU_Circle.png";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 mb-[-120px]`}>
    {/* this is a container div in which we can animate children elements */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          IOES Lab.
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-col justify-center items-center"
        >
          <br />
          <br />
          <p className={styles.heroPlain}>
            <span className="text-blue-500/80">I</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500/80 to-purple-100/80">
              ntelligent
            </span>{" "}
            <span className="text-blue-500/80">O</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500/80 to-purple-100/80">
              cean
            </span>
          </p>
          <p className={styles.heroPlain}>
            <span className="text-blue-500/80">E</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 to-purple-100/80">
              ngineering
            </span>{" "}
            <span className="text-blue-500/80">S</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 to-purple-100/80">
              ystems
            </span>
          </p>
          <p className={styles.heroPlain}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 to-purple-100/80">
              Laboratory,
            </span>{" "}
            <span className="text-blue-500/80">KMOU</span>{" "}
          </p>
          <br />
          <div className="w-full flex justify-end mt-[-30px] max-sm:mt-[-25px] -mb-[80px] max-sm:mb-[-50px] max-sm:right-[-30px] -right-20 relative z-10 ">
            <Image
              src={KMOU_Circle}
              alt="stamp"
              placeholder="blur"
              priority
              className="max-sm:max-w-[80px] w-[120px] lg:w-[180px] lg:h-[180px] max-sm:max-h-[80px] h-[120px] object-contain bg-white/80 rounded-full p-1"
            />
          </div>
        </motion.div>
      </div>

      {/* NOTE "-mt-[20px]" means "minus 20px margin top" */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:mt-[20px] mt-[15px]"
      >
        <Image
          src={cover}
          alt="cover"
          placeholder="blur"
          priority
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative "
        />

        
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
