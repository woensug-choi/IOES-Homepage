"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { Megaphone, Mail, Hand } from "lucide-react";

function Recruit() {
  const t = useTranslations("Recruit");
  const [appointmentUrl, setAppointmentUrl] = useState(
    "mailto:wschoi@kmou.ac.kr"
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setAppointmentUrl(t("whattime_link"));
    setIsMounted(true);
  }, [t]);

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      className="mt-5 flex-[0.5] lg:min-w-[65%] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative "
    >
      <div className="feedback-gradient" />

      <div>
        <div className="w-full flex items-center text-yellow-200">
          <Megaphone className="w-10 h-10 mr-2" />
          <p className="font-extrabold sm:text-[28px] text-[24px]">
            {t("title")}
          </p>
        </div>
        <p className="px-3 break-all mt-[8px] font-normal sm:text-[18px] text-[14px] leading-relaxed text-white">
          {t("content")}
        </p>

        <div className="flex flex-wrap justify-center w-full">
          <a
            href={appointmentUrl}
            className="mx-2 mt-5 w-[280px] flex items-center h-fit py-4 px-6 bg-[#e953c6]/30 rounded-[32px] gap-[12px]"
          >
            <Hand className="text-white object-contain" />
            <span className="font-normal text-[16px] text-white">
              {t("Make Appointment")}
            </span>
          </a>
          <a
            href={appointmentUrl}
            className="mx-2 mt-5 w-[280px] flex items-center h-fit py-4 px-6 bg-green-600/30 rounded-[32px] gap-[12px]"
          >
            <Mail className="text-white object-contain" />
            <span className="font-normal text-[16px] text-white">
              {t("Send Email")}
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Recruit;