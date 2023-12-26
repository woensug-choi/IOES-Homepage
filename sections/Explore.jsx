"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { useTranslations } from "next-intl";

import Planet_1 from "../public/planet-01.png";
import Planet_2 from "../public/planet-02.png";
import Planet_3 from "../public/planet-03.png";
import Planet_4 from "../public/planet-04.png";

const Explore = () => {
  const t = useTranslations("Explore");
  const [activeCard, setActiveCard] = useState("world-2");


  const exploreWorlds = [
    {
      id: "world-1",
      imgUrl: Planet_1,
      title: "Research_1",
      tags: "Research_1_tags",
      category: "Research",
    },
    {
      id: "world-2",
      imgUrl: Planet_2,
      title: "Research_2",
      tags: "Research_2_tags",
      category: "Research",
    },
    {
      id: "world-3",
      imgUrl: Planet_3,
      title: "Developer_1",
      tags: "Developer_1_tags",
      category: "Developer",
    },
    {
      id: "world-4",
      imgUrl: Planet_4,
      title: "Developer_2",
      tags: "Developer_2_tags",
      category: "Developer",
    }
  ];

  return (
    <section className={`${styles.paddings}`} id="explore">
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
