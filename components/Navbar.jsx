"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import search from "../public/search.svg";
import menu from "../public/menu.svg";

import { useTranslations } from "next-intl";

import Sidebar from "../components/Sidebar";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown } from "lucide-react";
import React, { useRef, useEffect, useCallback } from "react";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";

import { US, KR, JP } from "country-flag-icons/react/3x2";

function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const [navOpen, setNavOpen] = React.useState(false);

  useEffect(() => {}, []);

  return (
    // NOTE we can declare tags with motion like this for whichever tag we want to animate
    <nav
      className={`${styles.xPaddings} max-sm:py-2 py-8 relative flex justify-center`}
    >
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="absolute w-[50%] inset-0 gradient-01"
      />

      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`max-sm:pl-2 pl-10 max-sm:pt-2 pt-5 w-full fixed mx-auto flex flex-row gap-8 max-sm:text-xs items-center max-sm:ml-[-10px] max-sm:gap-1 z-50`}
      >
        {navOpen ? (
          <div className="flex justify-start w-full">
            <button onClick={() => setNavOpen(!navOpen)}>
              <ChevronRight className="w-[24px] h-[24px] object-contain text-white max-sm:ml-3" />
            </button>
            <div className="text-white flex w-full justify-between">
              <div className="flex py-2 pr-4 border-2 border-white/20 rounded-full backdrop-blur-sm max-sm:gap-y-2 flex-row gap-x-2 max-sm:mt-1">
                <a href="#explore">
                  <div className="z-50 ml-3 border-r border-white/40 pr-2">{t("Research")}</div>
                </a>
                <a href="#advisor">
                  <div className="z-50 border-r border-white/40 pr-2">{t("Advisor")}</div>
                </a>
                <a href="#members">
                  <div className="z-50 border-r border-white/40 pr-2">{t("Members")}</div>
                </a>
                <a href="#classes">
                  <div className="z-50">{t("Classes")}</div>
                </a>
                {/* <a href="#contact">
                  <div className="z-50">{t("Contact")}</div>
                </a> */}
              </div>
              <div className="flex flex-row ml-2 pt-3 max-sm:pr-5 pr-20 mt-0.5">
                <a href="/en" onClick={() => setNavOpen(!navOpen)}>
                  <div className="z-50">
                    <US className="w-4 h-4 max-sm:mt-0 mt-0.5 mr-2" />
                  </div>
                </a>
                <a href="/jp" onClick={() => setNavOpen(!navOpen)}>
                  <div className="z-50">
                    <JP className="w-4 h-4 max-sm:mt-0 mt-0.5 mr-2" />
                  </div>
                </a>
                <a href="/ko" onClick={() => setNavOpen(!navOpen)}>
                  <div className="z-50">
                    <KR className="w-4 h-4 max-sm:mt-0 mt-0.5 mr-2" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full flex flex-row justify-between">
              <button onClick={() => setNavOpen(!navOpen)} className="py-3">
                <ChevronDown className="w-[24px] h-[24px] object-contain text-white/80 max-sm:ml-3" />
              </button>
              <div className="flex flex-row pt-2 max-sm:pr-5 pr-20 mt-0.5">
                <a href="/en">
                  <div className="z-50">
                    <US className="w-4 h-4 max-sm:mt-0 mt-0.5 mr-2" />
                  </div>
                </a>
                <a href="/jp">
                  <div className="z-50">
                    <JP className="w-4 h-4 max-sm:mt-0 mt-0.5 mr-2" />
                  </div>
                </a>
                <a href="/ko">
                  <div className="z-50">
                    <KR className="w-4 h-4 max-sm:mt-0 mt-0.5 mr-2" />
                  </div>
                </a>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </nav>
  );
}

export default Navbar;
