"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { useTranslations } from "next-intl";

// import FSI from "../public/FSI.png";
import SonarObjectRecognition from "../public/SonarObjectRecognition.png";
import AcousticsUnderwater from "../public/AcousticsUnderwater.png";
import ROSGazebo from "../public/ROS-Gazebo.png";
import AutonomousSim from "../public/AutonomousSim.png";
import VirtualWorld from "../public/cesium_omniverse.avif";
import Planet_9 from "../public/planet-09.png";

const Explore = () => {
  const t = useTranslations("Explore");
  const [activeCard, setActiveCard] = useState("VirtualWorld");

  const exploreWorlds = [
    {
      id: "VirtualWorld",
      imgUrl: VirtualWorld,
      title: "Developer_3",
      tags: "Developer_3_tags",
      category: "Engineer",
      link: "https://yeongdocat.notion.site/ba2cc80144c2405a9d764574a06ac850?pvs=4",
    },
    {
      id: "ROSGazebo",
      imgUrl: ROSGazebo,
      title: "Developer_1",
      tags: "Developer_1_tags",
      category: "Engineer",
      link: "https://yeongdocat.notion.site/4db0cfce893a4450ba47bb0277eb856b?pvs=4",
    },
    {
      id: "AutonomousSim",
      imgUrl: AutonomousSim,
      title: "Developer_2",
      tags: "Developer_2_tags",
      category: "Engineer",
      link: "https://yeongdocat.notion.site/b0724a1aff334e5eabba40978724b4df?pvs=4",
    },
    {
      id: "SonarObjectRecognition",
      imgUrl: SonarObjectRecognition,
      title: "Developer_4",
      tags: "Developer_4_tags",
      category: "Engineer",
      link: "https://yeongdocat.notion.site/222661362ab28028a214ca8b5a9fb77b",
    },
    {
      id: "AcousticsUnderwater",
      imgUrl: AcousticsUnderwater,
      title: "Research_1",
      tags: "Research_1_tags",
      category: "Research",
      link: "https://yeongdocat.notion.site/ec653baf1f0e4d02bd04a3e3579c007d?pvs=4",
    },
    {
      id: "FullStack",
      imgUrl: Planet_9,
      title: "FullStackDev",
      tags: "FullStackDev_tags",
      category: "Developer",
      link: "https://yeongdocat.notion.site/e99dd6e088ce4da6af2911777104c1a6?pvs=4",
    },
    // {
    //   id: "FSI",
    //   imgUrl: FSI,
    //   title: "Research_2",
    //   tags: "Research_2_tags",
    //   category: "Research",
    //   link: "https://yeongdocat.notion.site/a25c4ded939647d39070d671f819f5c6?pvs=4",
    // },
  ];

  return (
    <section className={`${styles.paddings} mt-20`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t("typingtext")} textStyles="text-center" />
        <TitleText title={t("title")} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={activeCard}
              handleClick={setActiveCard}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
