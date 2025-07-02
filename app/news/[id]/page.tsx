import { notFound } from "next/navigation";
import { newsData } from "@/data/news";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex, Text } from "@chakra-ui/react";
import Heading from "@/components/ui/internal/heading";
import Description from "@/components/ui/internal/news/description";
import ImageBox from "@/components/ui/internal/news/image-box";
import Tag from "@/components/ui/internal/tag";
import { use } from "react";
import VerticalDivider from "@/components/ui/internal/news/vertical-divider";

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

  const newsItem = newsData.find((item) => item.id === newsId);
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
          <Heading text={newsItem.title} color="neutral-1" />
          <Flex position={"relative"}>
            <ImageBox
              path={newsItem.mainPhoto}
              alt={newsItem.title}
              maxWidth="full"
            />
            <Flex
              zIndex={2}
              position={"absolute"}
              left={"var(--global-spacing)"}
              bottom={"var(--global-spacing)"}
              paddingY={"8px"}
              paddingX={"15px"}
              rounded={"lg"}
              border={"1px solid"}
              borderColor={"primary-3"}
              backgroundColor={"primary-5"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
              maxWidth={`calc(100% - 2 * var(--global-spacing))`}
            >
              <Text color={"neutral-2"}>
                {newsItem.dateCreated} - {newsItem.author}
              </Text>
              <VerticalDivider backgroundColor="neutral-2" />
              <Flex flexWrap={"wrap"} gap={2}>
                <Tag text={newsItem.tags[0]} color="neutral-2" />
                {/* <Tag text={newsItem.tags[1]} /> */}
              </Flex>
            </Flex>
          </Flex>

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
                <ImageBox
                  path={section.photo}
                  alt={section.photoDescription}
                  maxWidth="full"
                />
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
