import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ChaptersMenu from "./ChaptersMenu";
import { Links } from "./Links";
import ThemeIcon from "./ThemeIcon";

export default function FullHeader() {
  const pathname = usePathname();
  const [chaptersOpen, setChaptersOpen] = useState<boolean>(false);
  const chaptersContainerRef = useRef<HTMLLIElement | null>(null);

  function handleChaptersClick() {
    setChaptersOpen((prev) => !prev);
  }

  function handleLinkClick() {
    setChaptersOpen(false);
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      chaptersContainerRef.current &&
      !chaptersContainerRef.current.contains(event.target as Node)
    ) {
      setChaptersOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="p-5 m-5 mx-auto flex flex-row justify-between items-center rounded-2xl bg-opacity-85 h-20 max-w-[var(--main-max-width)] fixed bg-white w-full shadow-lg border border-white/20 bg-white/30 backdrop-blur-lg">
        <div className="flex flex-row justify-between items-center w-full">
          <Link href="/">
            <Image
              className="hover:opacity-90 transition-all duration-200 ease-in-out"
              src="/Images/IEEE/IEEE Black.png"
              alt="IEEE Logo"
              width={85}
              height={50}
            />
          </Link>
          <ul className="flex flex-row gap-7 font-bold">
            <li
              ref={chaptersContainerRef}
              className="flex justify-center items-center relative"
            >
              <div
                className="flex flex-row justify-center items-center gap-1 cursor-pointer"
                onClick={handleChaptersClick}
              >
                <span>Chapters</span>
                <Icon
                  icon="lucide:chevron-down"
                  width={20}
                  height={20}
                  className={`${
                    chaptersOpen ? "rotate-180" : ""
                  } transition-all ease-in-out`}
                />
              </div>
              <AnimatePresence>
                {chaptersOpen && (
                  <motion.div
                    className="absolute top-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", stiffness: 250, damping: 25 }}
                  >
                    <ChaptersMenu onLinkClick={handleLinkClick} />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            {Links.map((item) => (
              <li key={item.id} className="relative">
                <Link
                  id={item.path}
                  href={item.path}
                  className="text-gray-900 hover:opacity-85 transition-all duration-300 ease-in-out"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
                {pathname === item.path && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <ThemeIcon />
        </div>
      </div>
    </div>
  );
}
