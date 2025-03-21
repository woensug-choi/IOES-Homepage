"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import { useTranslations } from "next-intl";

import { PersonStanding, Mail } from "lucide-react";

// import Recruit from "./Recruit";
import Gallery from "./Gallery";

// import prof from "../public/prof.png";
import TYK from "../public/TYK.jpeg";
// import LUS from "../public/LUS.jpeg";
import HJW from "../public/HJW.jpeg";
import KYS from "../public/KYS.jpeg";
import KMJ from "../public/KMJ.jpeg";
import KCH from "../public/KCH.jpeg";
import SMS from "../public/SMS.jpeg";
// import Cand1 from "../public/people-04.jpg";
import Cand2 from "../public/people-05.jpg";
import Cand3 from "../public/people-06.png";
// import Cand4 from "../public/people-07.png";

function Person(src, alt, type, name, email, memo_1, memo_2) {
  const t = useTranslations("Members");
  return (
    <div className="flex-1 flex flex-col">
      <div className={`${styles.flexCenter} relative`}>
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-contain rounded-full"
        />
        <div className="absolute center-0 bottom-[-15px] text-xs">
          {/* <div className="flex items-center w-fit text-white/80 h-fit p-1.5 px-3 bg-[#25618B]/80 rounded-[22px] gap-[12px]">
                      <GraduationCap className="w-4 h-4" /> {t("phd")} a9a998
                    </div> */}
          <div
            className={`rounded-[22px] ${
              type === "intern"
                ? "bg-[#a9a998]/80"
                : type === "undergraduate"
                ? "bg-[#a9a73f]/80"
                : type === "master"
                ? "bg-[#258b5a]/80"
                : "bg-[#7141af]/80"
            }`}
          >
            <div className="flex items-center w-fit text-white/80 h-fit p-1.5 px-3 gap-[12px]">
              <PersonStanding className="w-4 h-4 mr-[-7px]" /> {t(type)}
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-[26px] flex justify-center items-center font-bold text-center text-[24px] text-white leading-[30px]">
        {name}
        <Mail
          className="w-4 h-4 ml-2"
          color="#aeacb0"
          onClick={() => window.open(`mailto:${email}`)}
        />
      </h1>
      <p className="flex-1 mt-2 font-normal text-center text-[14px] text-[#B0B0B0] ">
        {memo_1}
      </p>
      <p className="flex-1 mt-1 font-normal text-center text-[14px] text-[#B0B0B0] ">
        {memo_2}
      </p>
    </div>
  );
}

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
          {/* <Recruit /> */}
          <div className="h-[30px]" />

          {/* PHD */}
          <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
            <div className="grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-3 gap-y-10">
              {Person(
                TYK,
                "TYK",
                "master",
                t("TYK"),
                t("TYK_mail"),
                t("OST"),
                t("TYK_memo_2")
              )}
              {/* {Person(LUS, "LUS", "intern", t("LUS"), t("LUS_mail"))} */}
              {Person(HJW, "HJW", "master", t("HJW"), t("HJW_mail"), t("OST"))}
              {Person(KMJ, "KMJ", "undergraduate", t("KMJ"), t("KMJ_mail"))}
              {Person(KCH, "KCH", "undergraduate", t("KCH"), t("KCH_mail"))}
              {Person(KYS, "KYS", "undergraduate", t("KYS"), t("KYS_mail"))}
              {Person(SMS, "SMS", "undergraduate", t("SMS"), t("SMS_mail"))}
              {Person(
                Cand2,
                "Cand1",
                "undergraduate",
                t("Cand1"),
                t("Cand1_mail")
              )}
              {/* {Person(Cand3, "Cand2", "master", t("Cand2"), t("Cand2_mail"))} */}
            </div>
          </motion.div>

          {/* <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="mt-20"
          >
            <div className="grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-3 gap-y-10">
              {Person(
                Cand2,
                "Cand1",
                "undergraduate",
                t("Cand1"),
                t("Cand1_mail")
              )}
              {Person(Cand3, "Cand2", "master", t("Cand2"), t("Cand2_mail"))}
            </div>
          </motion.div> */}

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
      <div className="mt-20">
        <Gallery />
      </div>
    </section>
  );
};

export default Members;
