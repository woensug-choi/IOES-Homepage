"use client";

import { Link } from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";
import arrow from "../public/arrow.svg";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const InsightCard = ({ imgUrl, title, url, subtitle, index }) => {
  const t = useTranslations("Classes");
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <div className="relative">
        <Image
          src={imgUrl}
          alt="planet-01"
          placeholder="blur"
          className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
        />

        {/* <p className="absolute right-5 bottom-5 h-fit w-fit px-4 py-2 text-white bg-[#258b7d] rounded-[32px] gap-[12px]">Class Materials</p> */}
      </div>

      <div className="flex w-full justify-between items-center ">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
          <a
            href={url}
            className="hidden max-lg:block mt-5 text-right h-fit w-fit px-4 py-2 text-white bg-[#258b7d]/20 hover:bg-[#258b7d]/60 rounded-[32px] gap-[12px]"
          >
            <p className="flex">
              <ArrowRight className="text-white object-contain mr-2" />
              {t("To Class Materials")}
            </p>
          </a>
        </div>
        <a
          href={url}
          className="ml-5 lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
        >
          {/* <Image
          src={arrow}
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        /> */}
          <ArrowRight className="w-[40%] h-[40%] text-white object-contain" />
        </a>
      </div>
    </motion.div>
  )
};

export default InsightCard;
