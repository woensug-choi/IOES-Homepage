"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
import headset from "../public/headset.svg";
import { useTranslations } from "next-intl";
import { Hand, Mail } from "lucide-react";
import KMOULogo from "../public/logo.png";
import { useState, useEffect } from "react";

const Footer = () => {
  const t = useTranslations("Footer");

  const [appointmentUrl, setAppointmentUrl] = useState(
    "mailto:wschoi@kmou.ac.kr"
  );
  useEffect(() => {
    setAppointmentUrl(t("whattime_link"));
  }, [t]);

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            {t("ContactUs")}
            <br />
            <p className="flex w-fit text-normal text-sm text-white/80 text-right">
              <Mail className="mr-2 w-5 h-5 ml-2" />
              wschoi@kmou.ac.kr
            </p>
          </h4>
          <a
            href={appointmentUrl}
            className="flex items-center h-fit py-4 px-6 bg-[#e953c6]/30 hover:bg-[#e953c6]/60 rounded-[32px] gap-[12px]"
          >
            <Hand className="text-white object-contain" />
            <span className="font-normal text-[16px] text-white">
              {t("MakeReservation")}
            </span>
          </a>

          <div className="flex flex-col">
            <div className="mb-[50px] h-[2px] bg-white opacity-10 w-full" />
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h4 className="font-extrabold text-[24px] text-white">
                Lab. IOES
              </h4>
              <Link href="https://www.kmou.ac.kr" type="button">
                <Image
                  src={KMOULogo}
                  alt="planet-09"
                  placeholder="blur"
                  className="w-[150px] p-0 first-letter:object-cover rounded-[20px]"
                />
              </Link>
              <p className="font-normal text-[14px] text-white opacity-50">
                Copyright © 2023 Lab. IOES. All rights reserved.
              </p>

              {/* <div className="flex gap-4">
                {socials.map((social) => (
                  <Image
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
