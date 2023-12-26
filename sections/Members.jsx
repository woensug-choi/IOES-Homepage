"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import whats_new from "../public/whats-new.png";
import { useTranslations } from "next-intl";

import { Users, Egg, Bird, PersonStanding, GraduationCap } from "lucide-react";

import prof from "../public/prof.png";
import TYK from "../public/TYK.jpeg";

const Members = () => {
  const t = useTranslations("Members");
  return (
    <section className={`${styles.paddings} relative z-10`} id="members">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} flex mx-auto w-full flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={t("typingtext")} />
          <TitleText title={t("title")} />

          <div className="h-[30px]" />

          {/* PHD */}
          <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
            <div className="grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-3 gap-y-10">
              <div className="flex-1 flex flex-col">
                <div className={`${styles.flexCenter} relative`}>
                  <Image
                    src={TYK}
                    alt="TYK"
                    placeholder="blur"
                    className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-contain rounded-full"
                  />
                  <div className="absolute center-0 bottom-[-15px] text-xs">
                    {/* <div className="flex items-center w-fit text-white/80 h-fit p-1.5 px-3 bg-[#25618B]/80 rounded-[22px] gap-[12px]">
                      <GraduationCap className="w-4 h-4" /> {t("phd")}
                    </div> */}
                    <div className="flex items-center w-fit text-white/80 h-fit p-1.5 px-3 bg-[#258b5a]/80 rounded-[22px] gap-[12px]">
                      <PersonStanding className="w-6 h-6" /> {t("master")}
                    </div>
                    {/* <div className="flex items-center w-fit text-white/80 h-fit p-1.5 px-3 bg-[#778b25]/80 rounded-[22px] gap-[12px]">
                      <PersonStanding className="w-6 h-6" /> {t("undergraduate")}
                    </div> */}
                  </div>
                </div>
                <h1 className="mt-[26px] font-bold text-center text-[24px] text-white leading-[30px]">
                  {t("TYK")}
                </h1>
                <p className="flex-1 mt-1 font-normal text-center text-[18px] text-[#B0B0B0] leading-[32px]">
                  {t("TYK_mail")}
                </p>
              </div>

            </div>
          </motion.div>

          {/* Alumni */}
          {/* <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
            <div className="flex w-full justify-center">
              <div className="text-center flex items-center w-fit text-white/80 h-fit py-4 px-6 mb-10 mt-[60px] bg-[#5a258b]/20 rounded-[32px] gap-[12px]">
                <Users className="w-6 h-6" /> {t("alumni")}
              </div>
            </div>
            <div className="grid grid-cols-5 max-sm:grid-cols-4 max-lg:grid-cols-4 gap-y-10">
              <Image
                src={TYK}
                alt="TYK"
                placeholder="blur"
                className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain rounded-full"
              />
          </motion.div> */}
        </motion.div>

        {/* <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src={whats_new}
            alt="new-features"
            placeholder="blur"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Members;
