import React from "react";
import { motion } from "framer-motion";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface FooterProps {
  locale: string;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: "github",
      url: "https://github.com/Landrytido",
      icon: <FiGithub className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      id: "linkedin",
      url: "https://linkedin.com/in/landry-tido-atikeng",
      icon: <FiLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      id: "whatsapp",
      url: "https://wa.me/+32465362609",
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
    },
    {
      id: "email",
      url: "mailto:landrytido727@gmail.com",
      icon: <FiMail className="w-5 h-5" />,
      label: "Email",
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * custom,
        duration: 0.3,
      },
    }),
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      className="bg-gray-50 dark:bg-gray-900 py-6 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.div
            className="font-bold text-2xl text-primary"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary">L</span>
            <span className="text-black dark:text-white">T</span>
          </motion.div>

          <motion.a
            href="#top"
            className="flex items-center text-primary hover:underline text-sm"
            whileHover={{ scale: 1.1 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <FiArrowUp className="mr-1" />
            {locale === "fr" ? "Haut de page" : "Back to top"}
          </motion.a>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary shadow-md hover:shadow-lg transition-all"
                  variants={iconVariants}
                  custom={index}
                  whileHover="hover"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {locale === "fr"
                  ? "Développé avec passion par Landry Tido"
                  : "Developed with passion by Landry Tido"}
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs">
                &copy; {currentYear} -{" "}
                {locale === "fr"
                  ? "Tous droits réservés"
                  : "All rights reserved"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
