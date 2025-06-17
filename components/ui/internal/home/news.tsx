import React from "react";
import { Carousel } from "@/components/ui/internal/carousel";
import { newsData } from "@/app/news/news";

export default function News() {
  return <Carousel newsItems={newsData.news} />;
}
