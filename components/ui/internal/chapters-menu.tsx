"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Chapters } from "./chapters";

interface ChaptersMenuProps {
  onLinkClick: () => void;
}

export default function ChaptersMenu({ onLinkClick }: ChaptersMenuProps) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2 w-[360px] bg-primary-foreground rounded-xl p-4 ">
      {Chapters.map((chapter) => (
        <Link
          key={chapter.id}
          href={chapter.href}
          className="relative flex flex-col justify-between items-center p-2 min-h-12 rounded-lg"
          onClick={onLinkClick}
          style={{ backgroundColor: chapter.secondaryColor }}
        >
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row justify-center items-center gap-4">
              <Image
                src={chapter.path}
                alt={chapter.alt}
                width={40}
                height={40}
              />
              <span
                className="flex justify-center items-center text-xl"
                style={{ color: chapter.identityColor }}
              >
                {chapter.name}
              </span>
            </div>
            <Icon
              icon="lucide:chevron-right"
              style={{ color: chapter.identityColor }}
              width={20}
              height={20}
            />
          </div>
          <div
            className="self-start opacity-80"
            style={{ color: chapter.identityColor }}
          >
            {chapter.description}
          </div>
          {pathname === chapter.href && (
            <motion.div
              layoutId="active-underline"
              className="absolute top-0 -left-2 w-[5px] h-full rounded-[50px]"
              style={{ backgroundColor: chapter.identityColor }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />
          )}
        </Link>
      ))}
    </div>
  );
}
