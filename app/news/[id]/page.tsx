import { notFound } from "next/navigation";
import { newsData } from "../news";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import Heading from "@/components/ui/internal/heading";
import Description from "@/app/news/description";
import ImageBox from "../image-box";
import Tag from "@/components/ui/internal/tag";

export default async function NewsPage({ params }: { params: { id: string } }) {
  const newsId = Number(params.id);

  if (isNaN(newsId)) {
    return notFound();
  }

  const allNews = newsData.news;
  const newsItem = allNews.find((item) => item.id === newsId);

  if (!newsItem) {
    return notFound();
  }

  return (
    <PageWrapper>
      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        padding={"var(--global-spacing)"}
        gap={"calc(var(--card-padding) * 1.5)"}
        maxWidth={"1050px"}
        mx={"auto"}
      >
        <Heading text={newsItem.title} color="natural-2" />
        <Box
          width={"full"}
          maxWidth={"850px"}
          mx={"auto"}
          position={"relative"}
          bgImage={`url(${newsItem.mainPhoto})`}
          bgSize="cover"
          rounded="2xl"
          border="1px solid"
          borderColor="card-border-1"
          style={{
            aspectRatio: "16/9",
          }}
        >
          <Flex
            position={"absolute"}
            left={"var(--global-spacing)"}
            bottom={"var(--global-spacing)"}
            paddingY={"calc(var(--global-spacing) * 0.8)"}
            paddingX={"calc(var(--global-spacing) * 1.5)"}
            rounded={"lg"}
            border={"1px solid"}
            borderColor={"card-border-3"}
            backgroundColor={"card-bg-3"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
          >
            <Text color={"text-4"}>
              {newsItem.dateCreated} - {newsItem.author}
            </Text>
            <Box height="2.2rem" width="1px" backgroundColor="text-5" />
            <Tag text={newsItem.tags[0]} />
          </Flex>
        </Box>

        <Description
          description={newsItem.description}
          color={"natural-2"}
          maxWidth="1050px"
        />
        <Flex flexDirection={"column"} gap={"calc(var(--global-spacing) * 4)"}>
          {newsItem.sections.map((section, index) => (
            <div key={section.id}>
              {section.photo && (
                <Flex flexDirection={"column"} gap={2}>
                  <ImageBox path={section.photo} maxWidth="600px" />
                  <Text textAlign={"center"} color={"text-5"}>
                    Figure {index + 1}: {section.photoDescription}
                  </Text>
                </Flex>
              )}
              <Text
                fontWeight={"bold"}
                fontSize={"1.4rem"}
                marginTop={6}
                marginBottom={2}
              >
                {section.heading}
              </Text>
              <Flex flexDirection={"column"} fontSize={"2rem"} gap={4}>
                {section.descriptions.map((description, index) => (
                  <Description
                    key={index}
                    description={description}
                    color={"natural-2"}
                    maxWidth="1050px"
                  />
                ))}
              </Flex>
            </div>
          ))}
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
