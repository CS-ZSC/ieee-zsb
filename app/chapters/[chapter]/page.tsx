"use client";

import Board from "@/components/ui/internal/chapters/board";
import { Description } from "@/components/ui/internal/chapters/description";
import { HeroCard } from "@/components/ui/internal/chapters/hero-card";
import { Timeline } from "@/components/ui/internal/chapters/timeline/timeline";
import { Tracks } from "@/components/ui/internal/chapters/tracks/tracks";
import Container from "@/components/ui/internal/container";
import NewsCard from "@/components/ui/internal/news/news-card";
// import News from "@/components/ui/internal/home/news";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import PageTitle from "@/components/ui/internal/pageTitle";
import { chaptersData } from "@/data/chapters";
import { newsData } from "@/data/news";
import { useWindowType } from "@/hooks/use-window-type";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { use } from "react";


export default function Chapter({ params }: { params: Promise<{ chapter: string }> }) {
    const { isDesktop } = useWindowType();
    const chapterList = [
        "cs",
        "pes",
        "ras",
        "wie"
    ]
    const { chapter } = use(params);

    if (!chapter || !chapterList.includes(chapter.toLowerCase())) {
        notFound();
    }

    const filteredNews = newsData.filter((item) => {
        return item.tags.map(tag => tag.toUpperCase()).includes(chapter.toUpperCase());
    });

    const chapterData = chaptersData.find((item) => item.short_name.toLowerCase() === chapter.toLowerCase());

    return (
        <PageWrapper>
            <Flex flexDirection={"column"} gap={12}>
                <HeroCard logo={chapterData?.logo} colorScheme={chapterData?.color_scheme} />
                {/* <Container> */}
                <Box w="full">
                    <Description
                        about={chapterData?.description.about}
                        mission={chapterData?.description.mission}
                        vision={chapterData?.description.vision}
                        color={chapterData?.color_scheme}
                    />
                </Box>
                {filteredNews.length > 0 && <Container>
                    <PageTitle title="Chapter News" />
                    <SimpleGrid
                        columns={isDesktop ? 2 : 1}
                        paddingX={isDesktop ? 20 : "0px"}
                        width="full"
                        gap="var(--global-spacing)"
                    >
                        {filteredNews.map((newsItem) => (
                            <NewsCard key={newsItem.id} newsObject={newsItem} />))}
                    </SimpleGrid>
                </Container>}
                <Container>
                    <PageTitle title="Board" />
                    <Board board={chapterData?.board} />
                </Container>
                {chapterData?.tracks.length > 0 && <Container>
                    <PageTitle title="Tracks" />
                    <Tracks tracks={chapterData?.tracks} color_scheme={chapterData?.color_scheme} />
                </Container>}

                <PageTitle title="Chapter Timeline" />

                <Timeline seasons={chapterData?.seasons} />

            </Flex>
        </PageWrapper>
    )
}
