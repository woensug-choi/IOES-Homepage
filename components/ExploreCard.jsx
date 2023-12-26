"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import search from "../public/search.svg";
import { useTranslations } from "next-intl";

// We are getting this "id, imgUrl, title" props from "{...world} spread".
const ExploreCard = ({
  id,
  imgUrl,
  title,
  category,
  tags,
  index,
  active,
  handleClick,
}) => {
  const t = useTranslations("Explore");
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } ${
        styles.flexCenter
      } min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer z-40`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={`image-${id}`}
        placeholder="blur"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ">
          {t(title)}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 max-sm:py-4 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] ">
          <div className="flex grid-cols-2 justify-between">
              <p
                className={`${styles.flexCenter} h-[60px] max-sm:h-[40px] rounded-[15px] glassmorphism mb-[16px] max-sm:mb-2 text-[18px] leading-[20px] px-4`}
              >
                {category === "Research" ? (
                  <span className="font-bold text-emerald-400">{t("research")}</span>
                ) : (
                  <span className="font-bold text-amber-300">{t("developer")} </span>
                )}
              </p>
          </div>
          <h2 className="mt-[24px] max-sm:mt-[12px] font-bold sm:text-[32px] text-[24px] text-white ">
            {t(title)}
          </h2>
          <p className="font-normal text-[16px] leading-[20px] text-white/80">
            {t(tags)}
          </p>
          <p className="font-normal mt-5 text-[16px] leading-[20px] text-white uppercase ">
            {t("learn_more")}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
