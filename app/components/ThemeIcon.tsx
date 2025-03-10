import React from "react";
import { DarkMode } from "../../atoms";
import { useAtom } from "jotai";
import { Icon } from "@iconify/react";

export default function ThemeIcon() {
  const [darkmode, setDarkMode] = useAtom(DarkMode);

  function toggleChaptersAccordion() {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem(
        "SmallHeaderChaptersAccordionAtom",
        newValue.toString()
      );
      return newValue;
    });
  }

  function handleLinkClick() {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("SmallHeaderAtom", "false");
      return newValue;
    });
  }
  if (darkmode == true)
    return (
      <Icon
        className="cursor-pointer"
        icon="lucide:moon"
        width={30}
        height={30}
      />
    );
  else
    return (
      <Icon
        className="cursor-pointer"
        icon="lucide:sun"
        width={30}
        height={30}
      />
    );
}
