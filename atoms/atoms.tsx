import { atom } from "jotai";

const getStoredValue = (key: string, defaultValue: boolean) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key) === "true";
  }
  return defaultValue;
};

export const FullHeaderChaptersAccordionAtom = atom(
  getStoredValue("FullHeaderChaptersAccordionAtom", true)
);

export const SmallHeaderChaptersAccordionAtom = atom(
  getStoredValue("SmallHeaderChaptersAccordionAtom", true)
);

export const FooterChaptersAccordionAtom = atom(
  getStoredValue("FooterChaptersAccordionAtom", true)
);

export const SmallHeaderAtom = atom(getStoredValue("SmallHeaderAtom", false));

export const DarkMode = atom(getStoredValue("DarkMode", false));

const getStoredNewsFilterCheckedItems = (): boolean[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("newsFilterCheckedItems");
    if (stored) {
      return JSON.parse(stored);
    }
  }
  return [true, false, false, false, false, false, false, false];
};

const getStoredNewsFilterLabels = (): string[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("newsFilterLabels");
    if (stored) {
      return JSON.parse(stored);
    }
  }
  return ["All", "General", "CS", "RAS", "PES", "WIE", "Committees", "Competitions"];
};

export const newsFilterCheckedItemsAtom = atom(
  getStoredNewsFilterCheckedItems(),
  (get, set, newValue: boolean[]) => {
    set(newsFilterCheckedItemsAtom, newValue);
    if (typeof window !== "undefined") {
      localStorage.setItem("newsFilterCheckedItems", JSON.stringify(newValue));
    }
  }
);

export const newsFilterLabelsAtom = atom(
  getStoredNewsFilterLabels(),
  (get, set, newValue: string[]) => {
    set(newsFilterLabelsAtom, newValue);
    if (typeof window !== "undefined") {
      localStorage.setItem("newsFilterLabels", JSON.stringify(newValue));
    }
  }
);

export const filteredNewsCountAtom = atom(
  (get) => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("filteredNewsCount");
      return stored ? parseInt(stored) : 0;
    }
    return 0;
  },
  (get, set, newValue: number) => {
    set(filteredNewsCountAtom, newValue);
    if (typeof window !== "undefined") {
      localStorage.setItem("filteredNewsCount", newValue.toString());
    }
  }
);

export type SortType = "newest" | "oldest" | "alpha" | "reverseAlpha";

const SORT_VALUES: SortType[] = ["newest", "oldest", "alpha", "reverseAlpha"];

const STORAGE_KEY = "newsSortType";

const getStoredSortType = (): SortType => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SORT_VALUES.includes(stored as SortType)) {
      return stored as SortType;
    }
  }
  return "newest";
};

export const sortTypeAtom = atom(
  getStoredSortType(),
  (get, set, newValue: SortType) => {
    set(sortTypeAtom, newValue);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newValue);
    }
  }
);
