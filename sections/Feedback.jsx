"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import planet9 from "../public/planet-09.png";
import stamp from "../public/stamp.png";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import { useTranslations } from "next-intl";
import { TypingText, TitleText } from "../components";

import Recruit from "./../sections/Recruit";

const Feedback = () => {
  const t = useTranslations("Feedback");

  return (
    <section className={`${styles.paddings} relative z-10`} id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto lg:flex-row flex flex-col gap-6`}
      >
        <TitleText title={t("title")} textStyles="text-center mb-5" />
      </motion.div>
      {/* <div
        className={`${styles.innerWidth} mb-5 mt-[-20px]`}
      >
        <Recruit />
      </div> */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto lg:flex-row flex flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:min-w-[65%] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative "
        >
          <div className="feedback-gradient" />

          <div>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[14px] leading-relaxed text-white">
              {t("JoinUs_1")}
            </p>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[14px] leading-relaxed text-white">
              {t("JoinUs_2")}
            </p>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[14px] leading-relaxed text-white">
              {t("JoinUs_3")}
            </p>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[14px] leading-relaxed text-white">
              {t("JoinUs_4")}
            </p>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[14px] leading-relaxed text-white">
              {t("JoinUs_5")}
            </p>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[14px] leading-relaxed text-green-300">
              {t("JoinUs_6")}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <Image
            src={planet9}
            alt="join-us"
            placeholder="blur"
            className="w-full lg:h-full h-auto min-h-[210px] object-cover rounded-[40px]"
          />

          {/* <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <Image
              src={stamp}
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Feedback;
