"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, InsightCard } from "../components";
// import { insights } from "../constants";

import { useTranslations } from "next-intl";

import IntroNaval from "../public/IntroNaval.png";
import Dynamics from "../public/Dynamics.png";
import VibrationEngineering from "../public/VibrationEngineering.png";
import RoboticsSimulation from "../public/RoboticsSimulation.png";

const Classes = () => {
  const t = useTranslations("Classes");

  const Classes = [
    {
      imgUrl: IntroNaval,
      title: t("Title_IntroNaval"),
      subtitle: t("Explain_IntroNaval"),
      url: "https://kmou.wschoi.com/c3ee7718ef2849a8a34d034ea16089ba"
    },
    {
      imgUrl: Dynamics,
      title: t("Title_Dynamics"),
      subtitle: t("Explain_Dynamics"),
      url: "https://kmou.wschoi.com/b6411ecab7ea46fa99ae5238170937a7"
    },
    {
      imgUrl: VibrationEngineering,
      title: t("Title_VibrationEngineering"),
      subtitle: t("Explain_VibrationEngineering"),
      url: "https://kmou.wschoi.com/59e10c8124cb497c80140db9a581dad5"
    },
    {
      imgUrl: RoboticsSimulation,
      title: t("Title_RoboticsSimulation"),
      subtitle: t("Explain_RoboticsSimulation"),
      url: "https://kmou.wschoi.com/7cf2cefe3cc343fb8133b6d5e6bbb6b0"
    },
  ];

  return (
    <section className={`${styles.paddings} relative z-10`} id="classes">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t("typingtext")} textStyles="text-center" />
        <TitleText title={t("title")} textStyles="text-center" />

        <div className="mt-[50px] flex flex-col gap-[30px] ">
          {Classes.map((insight, index) => (
            <InsightCard
              key={`classes-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
