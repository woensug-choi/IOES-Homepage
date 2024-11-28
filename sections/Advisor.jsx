"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { TypingText, TitleText, StartSteps } from "../components";
import { startingFeatures } from "../constants";
// import getStarted from "../public/get-started.png";
import prof from "../public/prof.png";
import { useTranslations } from "next-intl";
import {
  GraduationCap,
  Award,
  Briefcase,
  ScrollText,
  User,
  Github,
  Workflow,
} from "lucide-react";

const Advisor = () => {
  const t = useTranslations("Advisor");

  return (
    <section
      className={`${styles.paddings} relative z-10 lg:ml-[15%]`}
      id="advisor"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto w-full flex flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexStart}`}
        >
          <Image
            src={prof}
            alt="profImage"
            placeholder="blur"
            className="w-[40%] h-[40%] md:w-[35%] md:h-[35%] lg:w-[30%] lg:h-[30%] xl:w-[20%] xl:h-[20%] object-contain rounded-full"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={t("typingtext")} />
          <TitleText title={t("title")} />

          <div className="mt-[31px] flex flex-col gap-[24px]">
            <div className={`${styles.flexStart} flex-row`}>
              <div
                className={`${styles.flexCenter} min-w-[60px] h-[58px] mr-[-10px] rounded-[18px] bg-[#323f5d]`}
              >
                <p className="font-bold text-[20px] text-white">
                  <GraduationCap />
                </p>
              </div>
              <div className="flex-col">
                <p className="flex-1 ml-[30px] font-bold text-[18px] text-white leading-[32px]">
                  Seoul National University
                </p>
                <p className="flex-1 ml-[30px] font-normal text-[14px] text-[#B0B0B0] leading-[22px] mb-4">
                  Feb. 2020, Seoul, South Korea <br />
                  Ph.D. in Naval Arch. and Ocean Eng. <br />
                </p>
                <p className="flex-1 ml-[30px] font-bold text-[18px] text-white leading-[32px]">
                  Yokohama National University
                </p>
                <p className="flex-1 ml-[30px] font-normal text-[14px] text-[#B0B0B0] leading-[22px] mb-4">
                  Feb. 2013, Yokohama, Japan <br />
                  B.E. in Mech. Eng. and Mat. Sci. <br />
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[31px] flex flex-col gap-[24px]">
            <div className={`${styles.flexStart} flex-row`}>
              <div
                className={`${styles.flexCenter} min-w-[60px] h-[58px] mr-[-10px] rounded-[18px] bg-[#323f5d]`}
              >
                <p className="font-bold text-[20px] text-white">
                  <Award />
                </p>
              </div>
              <div className="flex-col">
                <p className="flex-1 ml-[30px] font-bold text-[18px] text-white leading-[32px]">
                  NRC Research Associateship Award
                </p>
                <p className="flex-1 ml-[30px] font-normal text-[14px] text-[#B0B0B0] leading-[22px] mb-4">
                  Jul. 2020 ~ Aug. 2022, The National Research Council of the
                  National Academies, USA <br />
                  <span className="italic">
                    Research Associateship Programs
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[31px] flex flex-col gap-[24px]">
            <div className={`${styles.flexStart} flex-row`}>
              <div
                className={`${styles.flexCenter} min-w-[60px] h-[58px] mr-[-10px] rounded-[18px] bg-[#323f5d]`}
              >
                <p className="font-bold text-[20px] text-white">
                  <Briefcase />
                </p>
              </div>
              <div className="flex-col">
                <p className="flex-1 ml-[30px] font-bold text-[18px] text-white leading-[32px]">
                  Korea Maritime & Ocean University
                </p>
                <p className="flex-1 ml-[30px] font-normal text-[14px] text-[#B0B0B0] leading-[22px] mb-4">
                  Sep. 2022 ~ Present <br />
                  Department of Ocean Engineering, Busan, South Korea <br />
                  <span className="italic">Assistant Professor</span>
                </p>
                <p className="flex-1 ml-[30px] font-bold text-[18px] text-white leading-[32px]">
                  Naval Postgraduate School
                </p>
                <p className="flex-1 ml-[30px] font-normal text-[14px] text-[#B0B0B0] leading-[22px] mb-4">
                  Jul. 2020 ~ Aug. 2022 <br />
                  CRUSER (Consortium for Robotics and Unmanned Systems Education
                  and Research) <br />
                  <span className="italic">
                    Postdoctoral Researcher; NRC Fellowship
                  </span>{" "}
                  <br />
                </p>
                <p className="flex-1 ml-[30px] font-bold text-[18px] text-white leading-[32px]">
                  Center for Naval Ship Engineering
                </p>
                <p className="flex-1 ml-[30px] font-normal text-[14px] text-[#B0B0B0] leading-[22px] mb-4">
                  Mar. 2020 ~ June. 2020 <br />
                  Institute of Engineering Research, Seoul National University,
                  Seoul, South Korea <br />
                  <span className="italic">Postdoctoral Senior Researcher</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[31px] flex flex-col gap-[24px]">
            <div className={`${styles.flexStart} flex-row`}>
              <div
                className={`${styles.flexCenter} min-w-[60px] h-[58px] mr-[-10px] rounded-[18px] bg-[#323f5d]`}
              >
                <p className="font-bold text-[20px] text-white">
                  <Workflow />
                </p>
              </div>
              <div className="flex-col">
                <p className="flex-1 ml-[30px] font-bold text-[18px] text-white leading-[32px]">
                  Korean Society for Noise and Vibration Engineering
                </p>
                <p className="flex-1 ml-[30px] font-normal text-[14px] text-[#B0B0B0] leading-[22px] mb-4">
                  Jan. 2024 ~ Dec. 2024 <br />
                  Naval Architecture and Ocean Engineering
                  Division<br />
                  <span className="italic">Director</span>
                </p>
                <p className="flex-1 ml-[30px] font-bold text-[18px] text-white leading-[32px]">
                Open Robotics (Google Summer of Codes Mentor)
                </p>
                <p className="flex-1 ml-[30px] font-normal text-[14px] text-[#B0B0B0] leading-[22px] mb-4">
                  May. 2024 ~ Nov. 2024 <br />
                  Physics-based Sonar Simulation for Underwater Robotics <br />
                  <span className="italic">
                  Mentor
                  </span>{" "}
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-10 gap-y-5 grid-cols-2 lg:ml-[-10%] w-full space-x-5 max-sm:space-x-2 justify-center">
            <div>
              <Link
                href="https://lab-wschoi.notion.site/Curriculum-Vitae-c2ed165b5bd14f6d80c0433c00bb1849?pvs=4"
                type="button"
                className="flex items-center h-fit py-4 px-6 max-sm:px-4 max-sm:py-2 bg-[#258b5a]/40 hover:bg-[#258b5a]/70 rounded-[32px] gap-[12px]"
              >
                <ScrollText className="w-[24px] h-[24px] max-sm:w-[20px] text-white object-contain" />
                <span className="font-normal text-[16px] max-sm:text-sm text-white/80">
                  Curriculum Vitae
                </span>
              </Link>
              <Link
                href="https://scholar.google.com/citations?user=9rpkxUwAAAAJ"
                type="button"
                className="mt-5 flex items-center h-fit py-4 px-6 max-sm:px-4 max-sm:py-2 bg-[#25618B]/60 hover:bg-[#25618B]/90 rounded-[32px] gap-[12px]"
              >
                <User className="w-[24px] h-[24px] max-sm:w-[20px] text-white object-contain" />
                <span className="font-normal text-[16px] max-sm:text-sm text-white/80">
                  Google Scholar
                </span>
              </Link>
            </div>
            <div>
              <Link
                href="https://github.com/woensug-choi"
                type="button"
                className="flex items-center h-fit py-4 px-6 max-sm:px-4 max-sm:py-2 bg-black/60 hover:bg-black/30 hover:outline hover:outline-1 hover:outline-black rounded-[32px] gap-[12px]"
              >
                <Github className="w-[24px] h-[24px] max-sm:w-[20px] text-white object-contain" />
                <span className="font-normal text-[16px] max-sm:text-sm text-white/80">
                  Github (Personal)
                </span>
              </Link>
              <Link
                href="https://github.com/IOES-Lab"
                type="button"
                className="mt-5 flex items-center h-fit py-4 px-6 max-sm:px-4 max-sm:py-2 bg-black/60 hover:bg-black/30 hover:outline hover:outline-1 hover:outline-black rounded-[32px] gap-[12px]"
              >
                <Github className="w-[24px] h-[24px] max-sm:w-[20px] text-white object-contain" />
                <span className="font-normal text-[16px] max-sm:text-sm text-white/80">
                  Github (Lab)
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Advisor;
