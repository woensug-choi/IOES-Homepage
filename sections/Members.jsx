"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import { useTranslations } from "next-intl";

import { ChevronDown, ChevronUp, PersonStanding, Mail } from "lucide-react";

// import Recruit from "./Recruit";
import Gallery from "./Gallery";

// import prof from "../public/prof.png";
import TYK from "../public/TYK.jpeg";
// import LUS from "../public/LUS.jpeg";
import HJW from "../public/HJW.jpeg";
import KYS from "../public/KYS.jpeg";
import KMJ from "../public/KMJ.jpeg";
import SMS from "../public/SMS.jpeg";
// import Cand1 from "../public/people-04.jpg";
import Cand2 from "../public/people-05.jpg";
import Cand3 from "../public/people-06.png";
// import Cand4 from "../public/people-07.png";

function Person(
  src,
  alt,
  type,
  name,
  email,
  memo_1,
  memo_2,
  t,
  memo_3,
  typeLabel,
) {
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
              <PersonStanding className="w-4 h-4 mr-[-7px]" />
              {typeLabel || t(type)}
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
      {memo_3 && (
        <p className="flex-1 mt-1 font-normal text-center text-[14px] text-[#B0B0B0] ">
          {memo_3}
        </p>
      )}
    </div>
  );
}

const Members = () => {
  const t = useTranslations("Members");
  const [showAlumni, setShowAlumni] = useState(false);
  const alumni = t.raw("alumni");

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
              {/* {Person(LUS, "LUS", "intern", t("LUS"), t("LUS_mail"))} */}
              {Person(
                HJW,
                "HJW",
                "master",
                t("HJW"),
                t("HJW_mail"),
                t("OST"),
                t("HJW_memo_2"),
                t,
              )}
              {Person(
                KMJ,
                "KMJ",
                "master",
                t("KMJ"),
                t("KMJ_mail"),
                t("OST"),
                undefined,
                t,
              )}
              {Person(
                KYS,
                "KYS",
                "undergraduate",
                t("KYS"),
                t("KYS_mail"),
                undefined,
                undefined,
                t,
              )}
              {Person(
                SMS,
                "SMS",
                "undergraduate",
                t("SMS"),
                t("SMS_mail"),
                undefined,
                undefined,
                t,
              )}
              {Person(
                Cand2,
                "Cand1",
                "undergraduate",
                t("Cand1"),
                t("Cand1_mail"),
                undefined,
                undefined,
                t,
              )}
              {Person(
                Cand3,
                "Cand2",
                "master",
                t("Cand2"),
                t("Cand2_mail"),
                undefined,
                undefined,
                t,
              )}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="mt-16 border-t border-white/10 pt-10"
          >
            <div className="flex flex-col items-center text-center">
              <h2 className="font-bold text-[28px] text-white leading-[36px]">
                {t("alumniTitle")}
              </h2>
              <button
                type="button"
                aria-expanded={showAlumni}
                aria-controls="alumni-list"
                onClick={() => setShowAlumni((isVisible) => !isVisible)}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {showAlumni ? t("hideAlumni") : t("viewAlumni")}
                {showAlumni ? (
                  <ChevronUp className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>

            {showAlumni && (
              <div id="alumni-list" className="mt-8">
                {alumni.length > 0 ? (
                  <div className="grid grid-cols-4 gap-y-10 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-3">
                    {alumni.map((person) => (
                      <div key={`${person.name}-${person.period}`}>
                        {Person(
                          TYK,
                          person.name,
                          "master",
                          person.name,
                          person.email,
                          person.affiliation,
                          person.current,
                          t,
                          person.completion,
                          t("masterCompleted"),
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-sm text-[#B0B0B0]">
                    {t("noAlumni")}
                  </p>
                )}
              </div>
            )}
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
