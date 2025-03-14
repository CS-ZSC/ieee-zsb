"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Chapters } from "./chapters";
import { Links } from "./links";
import { useSetAtom, useAtom } from "jotai";
import { SmallHeaderAtom, SmallHeaderChaptersAccordionAtom } from "../../../atoms";

export default function SmallHeaderLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useAtom(SmallHeaderChaptersAccordionAtom);
  const setSmallHeaderAtom = useSetAtom(SmallHeaderAtom);

  function toggleChaptersAccordion() {
    setIsOpen((prev) => {
      const newValue = !prev;
      localStorage.setItem(
        "SmallHeaderChaptersAccordionAtom",
        newValue.toString()
      );
      return newValue;
    });
  }

  function handleLinkClick() {
    setSmallHeaderAtom((prev) => {
      const newValue = !prev;
      localStorage.setItem("SmallHeaderAtom", "false");
      return newValue;
    });
  }

  return (
    <div className="flex flex-col gap-2 text-xl rounded-xl mt-12 font-semibold cursor-pointer">
      <span
        onClick={toggleChaptersAccordion}
        className="flex justify-between items-center w-36 rounded-l transition"
      >
        <span className="ml-4">Chapters</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon icon="lucide:chevron-down" width={20} height={20} />
        </motion.div>
      </span>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="flex flex-col gap-1">
          {Chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={chapter.href}
              style={{ color: chapter.identityColor }}
              onClick={handleLinkClick}
            >
              <motion.div className="relative pl-4">
                {pathname === chapter.href && (
                  <motion.div
                    layoutId="activeLinkBorder"
                    className="absolute left-0 top-0 h-full w-1 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ backgroundColor: chapter.identityColor }}
                  />
                )}
                {chapter.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {Links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`relative ${
            !isOpen && link.path == "/committees" && "-mt-2"
          }`}
          onClick={handleLinkClick}
        >
          <motion.div className="relative pl-4">
            {pathname === link.path && (
              <motion.div
                layoutId="activeLinkBorder"
                className="absolute left-0 top-0 h-full w-1 bg-black rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {link.name}
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
