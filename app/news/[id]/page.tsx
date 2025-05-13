import { notFound } from "next/navigation";
import { newsData } from "../news";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import Heading from "@/components/ui/internal/heading";
import Description from "@/app/news/description";
import ImageBox from "../image-box";
import Tag from "@/components/ui/internal/tag";
import { use } from "react";
import VerticalDivider from "../vertical-divider";

export default function NewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const newsId = Number(id);
  if (isNaN(newsId)) {
    return notFound();
  }

  const allNews = newsData.news;
  const newsItem = allNews.find((item) => item.id === newsId);
  let photoCounter = 1;

  if (!newsItem) {
    return notFound();
  }

  return (
    <PageWrapper>
      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        padding={"var(--global-spacing)"}
        gap={"calc(var(--global-spacing) * 3)"}
        maxWidth={"1050px"}
        mx={"auto"}
      >
        <Flex
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"calc(var(--global-spacing) * 1.5)"}
        >
          <Heading text={newsItem.title} color="natural-2" />
          <Box
            width={"full"}
            // maxWidth={"850px"}
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
              paddingY={"8px"}
              paddingX={"15px"}
              rounded={"lg"}
              border={"1px solid"}
              borderColor={"card-border-3"}
              backgroundColor={"card-bg-3"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
              maxWidth={`calc(100% - 2 * var(--global-spacing))`}
            >
              <Text color={"text-4"}>
                {newsItem.dateCreated} - {newsItem.author}
              </Text>
              <VerticalDivider />
              <Flex flexWrap={"wrap"} gap={2}>
                <Tag text={newsItem.tags[0]} />
                {/* <Tag text={newsItem.tags[1]} /> */}
              </Flex>
            </Flex>
          </Box>

          <Description
            description={newsItem.description}
            color={"natural-2"}
            maxWidth="1050px"
          />
        </Flex>
          {newsItem.sections.map((section) => (
            <div key={section.id}>
              {section.photo && (
                <Flex flexDirection={"column"} gap={2}>
                  <ImageBox path={section.photo} maxWidth="600px" />
                  <Text
                    textAlign={"center"}
                    color={"natural-2"}
                    opacity={"0.8"}
                    marginBottom={4}
                  >
                    Figure {photoCounter++}: {section.photoDescription}
                  </Text>
                </Flex>
              )}
              <Text fontWeight={"bold"} fontSize={"1.4rem"} marginBottom={2}>
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
    </PageWrapper>
  );
}
