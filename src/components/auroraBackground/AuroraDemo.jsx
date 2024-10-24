"use client";
import { motion } from "framer-motion";
import React from "react";
import AuroraBackground from "./AuroraBackground";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube 
} from "react-icons/fa";
import XIcon from "../ui/XIcon";

const AuroraBackgroundDemo = ({title, description}) => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100063586296486",
      icon: <FaFacebookF className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Facebook"
    },
    {
      href: "https://www.facebook.com/profile.php?id=100063586296486",
      icon: <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Instagram"
    },
    {
      href: "https://www.linkedin.com/company/scfstrategies/?viewAsMember=true",
      icon: <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" />,
      label: "LinkedIn"
    },
    {
      href: "https://twitter.com/SCFStrategies",
      icon: <XIcon className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Twitter"
    },
    {
      href: "https://www.youtube.com/user/SCFStrategies",
      icon: <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />,
      label: "YouTube"
    }
  ];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-2xl md:text-5xl font-extrabold dark:text-white text-center">
          {title}
        </div>
        <div className="font-extralight text-center text-base md:text-3xl dark:text-neutral-200 py-4">
          {description}
        </div>
        
        
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/30 transition-all duration-300 text-white hover:scale-110"
                aria-label={link.label}
              >
                <div className="transform transition-transform duration-300 hover:scale-125">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        
      </motion.div>
    </AuroraBackground>
  );
};

export default AuroraBackgroundDemo;