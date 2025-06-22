import React from "react";
import { Carousel } from "@/components/ui/internal/carousel";
import { newsData } from "@/components/ui/internal/news/news";

export default function News() {
  return <Carousel newsItems={newsData} />;
}
