"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { useTranslations } from "next-intl";

import FSI from "../public/FSI.png";
import AcousticsUnderwater from "../public/AcousticsUnderwater.png";
import ROSGazebo from "../public/ROS-Gazebo.png";
import AutonomousSim from "../public/AutonomousSim.png";
import VirtualWorld from "../public/cesium_omniverse.avif";

const Explore = () => {
  const t = useTranslations("Explore");
  const [activeCard, setActiveCard] = useState("VirtualWorld");

  const exploreWorlds = [
    {
      id: "VirtualWorld",
      imgUrl: VirtualWorld,
      title: "Developer_3",
      tags: "Developer_3_tags",
      category: "Developer",
    },
    {
      id: "ROSGazebo",
      imgUrl: ROSGazebo,
      title: "Developer_1",
      tags: "Developer_1_tags",
      category: "Developer",
    },
    {
      id: "AutonomousSim",
      imgUrl: AutonomousSim,
      title: "Developer_2",
      tags: "Developer_2_tags",
      category: "Developer",
    },
    {
      id: "AcousticsUnderwater",
      imgUrl: AcousticsUnderwater,
      title: "Research_1",
      tags: "Research_1_tags",
      category: "Research",
    },
    {
      id: "FSI",
      imgUrl: FSI,
      title: "Research_2",
      tags: "Research_2_tags",
      category: "Research",
    },
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
