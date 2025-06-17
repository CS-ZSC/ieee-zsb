import { Box, Flex, Text, Button, VStack, HStack } from "@chakra-ui/react";
import React, { Dispatch, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Icon } from "@iconify/react";
import { useWindowType } from "@/hooks/use-window-type";
import { useRouter } from "next/navigation";
import Heading from "@/components/ui/internal/heading";
import type { NewsItem } from "@/app/news/news";
import NewsCard from "@/app/news/news-card";
import Description from "@/app/news/description";

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

interface CarouselProps {
  newsItems: NewsItem[];
  currentIndex: number;
  setCurrentIndex: Dispatch<React.SetStateAction<number>>;
  direction: "left" | "right";
  handleNext: () => void;
  handlePrev: () => void;
  handleDotRight: (index: number) => void;
  handleDotLeft: (index: number) => void;
}

export function Carousel({ newsItems }: { newsItems: NewsItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const { isDesktop } = useWindowType();

  newsItems = newsItems.filter((item) => item.homeItem == true);

  function handleNext() {
    setDirection("right");
    setCurrentIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  }

  function handlePrev() {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  }

  function handleDotRight(index: number) {
    setDirection("right");
    setCurrentIndex(index);
  }

  function handleDotLeft(index: number) {
    setDirection("left");
    setCurrentIndex(index);
  }

  return (
    <div>
      {isDesktop ? (
        <FullCarousel
          newsItems={newsItems}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          direction={direction}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleDotRight={handleDotRight}
          handleDotLeft={handleDotLeft}
        />
      ) : (
        <SmallCarousel
          newsItems={newsItems}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          direction={direction}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleDotRight={handleDotRight}
          handleDotLeft={handleDotLeft}
        />
      )}
    </div>
  );
}

const FlexMotion = motion.create(Flex);

function FullCarousel({
  newsItems,
  currentIndex,
  direction,
  handleNext,
  handlePrev,
  handleDotRight,
  handleDotLeft,
}: CarouselProps) {
  return (
    <Flex
      flexDirection="column"
      position="relative"
      overflow="hidden"
      rounded="2xl"
      border="1px solid"
      borderColor="card-border-1"
      bgColor="card-bg-1"
      padding="var(--card-padding)"
      gap="16px"
    >
      <Text
        fontSize="2.5rem"
        fontWeight="bold"
        color="text-1"
        textAlign="center"
      >
        Latest News
      </Text>
      <Flex
        onClick={handlePrev}
        position="absolute"
        cursor="pointer"
        left={4}
        zIndex={1}
        top="50%"
        transform="translateY(-50%)"
        rounded="3xl"
        backgroundColor="btn-bg-3"
        color="btn-text-3"
        w={8}
        h={11}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon icon="lucide:chevron-left" width={28} height={28} />
      </Flex>
      <Flex
        onClick={handleNext}
        position="absolute"
        cursor="pointer"
        right={4}
        zIndex={1}
        top="50%"
        transform="translateY(-50%)"
        rounded="3xl"
        backgroundColor="btn-bg-3"
        color="btn-text-3"
        w={8}
        h={11}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon icon="lucide:chevron-right" width={28} height={28} />
      </Flex>

      <HStack
        align="stretch"
        paddingX={"50px"}
        position="relative"
        minH="400px"
        gap={10}
      >
        <Flex
          flex={1}
          justifyContent={"space-between"}
          overflow="hidden"
          flexDirection={"column"}
          minH={"100%"}
          padding={"var(--global-spacing)"}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              style={{ width: "100%" }}
            >
              <VStack align="start">
                <Text
                  fontSize="2rem"
                  fontWeight="bold"
                  color={"text-2"}
                  textAlign="left"
                >
                  {newsItems[currentIndex].title}
                </Text>
                <Description
                  description={newsItems[currentIndex].description}
                  lineClamp="8"
                />
              </VStack>
            </motion.div>
          </AnimatePresence>
          <GoToNewsButton />
        </Flex>
        <Flex
          flex={1}
          display="flex"
          justifyContent="flex-end"
          alignItems={"center"}
          overflow="hidden"
          rounded={"2xl"}
        >
          <AnimatePresence custom={direction} mode="wait">
            <FlexMotion
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                maxHeight: "400px",
                maxWidth: "600px",
              }}
            >
              <Box
                width="100%"
                position="relative"
                bgImage={`url(${newsItems[currentIndex].mainPhoto})`}
                bgSize="cover"
                rounded="2xl"
                border="1px solid"
                borderColor="card-border-1"
                style={{
                  aspectRatio: "16/9",
                }}
              />
            </FlexMotion>
          </AnimatePresence>
        </Flex>
      </HStack>
      <Dots
        currentIndex={currentIndex}
        itemCount={newsItems.length}
        handleDotRight={handleDotRight}
        handleDotLeft={handleDotLeft}
      />
    </Flex>
  );
}

function SmallCarousel({
  newsItems,
  currentIndex,
  // setCurrentIndex,
  handleNext,
  handlePrev,
  handleDotRight,
  handleDotLeft,
}: CarouselProps) {
  const dragX = useMotionValue(0);
  const [, setIsDragging] = useState(false);

  // useEffect(() => {
  //   if (isDragging) return;

  //   const intervalRef = setInterval(() => {
  //     setCurrentIndex((pv) => {
  //       if (pv === newsItems.length - 1) return 0;
  //       return pv + 1;
  //     });
  //   }, AUTO_DELAY);

  //   return () => clearInterval(intervalRef);
  // }, [isDragging, setCurrentIndex]);

  function onDragStart() {
    setIsDragging(true);
  }

  function onDragEnd() {
    setIsDragging(false);
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && currentIndex < newsItems.length - 1) {
      handleNext();
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      handlePrev();
    }
  }

  return (
    <Flex
      flexDirection="column"
      overflow="hidden"
      rounded="2xl"
      border="1px solid"
      borderColor="card-border-1"
      bgColor="card-bg-1"
      padding="var(--global-spacing)"
      gap="16px"
    >
      <Heading text={"Latest News"} color="text-1" />
      <Flex
        flexDirection={"column"}
        gap={5}
        overflow="hidden"
        rounded="2xl"
        position="relative"
        cursor="grab"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          style={{
            x: dragX,
            display: "flex",
            gap: "16px",
            width: `calc(${newsItems.length * 100}% + ${(newsItems.length - 1) * 16}px)`,
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              style={{
                width: `calc(100%)`,
                transformOrigin: "center",
              }}
              animate={{
                translateX: `calc(-${currentIndex * 100}% - ${currentIndex * 16}px)`,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <NewsCard newsObject={item} />
            </motion.div>
          ))}
        </motion.div>
        <Flex>
          <Dots
            currentIndex={currentIndex}
            itemCount={newsItems.length}
            handleDotRight={handleDotRight}
            handleDotLeft={handleDotLeft}
          />
        </Flex>
      </Flex>
      <Flex alignSelf={"center"} marginBottom={2}>
        <GoToNewsButton />
      </Flex>
    </Flex>
  );
}

const AnimatedDot = motion.create(Box);

function Dots({
  currentIndex,
  itemCount,
  handleDotRight,
  handleDotLeft,
}: {
  currentIndex: number;
  itemCount: number;
  handleDotRight: (index: number) => void;
  handleDotLeft: (index: number) => void;
}) {
  function handleClick(index: number) {
    if (index > currentIndex) handleDotRight(index);
    else handleDotLeft(index);
  }

  return (
    <Flex w="full" justify="center" gap={1}>
      {Array.from({ length: itemCount }).map((_, idx) => (
        <AnimatedDot
          key={idx}
          onClick={() => handleClick(idx)}
          borderRadius="full"
          outline="none"
          initial={false}
          animate={{
            width: idx === currentIndex ? "28px" : "10px",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          }}
          height="10px"
          cursor="pointer"
          bg={idx === currentIndex ? "secondary" : "text-4"}
        />
      ))}
    </Flex>
  );
}

const textVariants = {
  enter: (direction: string) => ({
    y: direction === "right" ? 50 : -50,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: string) => ({
    y: direction === "right" ? -50 : 50,
    opacity: 0,
  }),
};

const imageVariants = {
  enter: (direction: string) => ({
    x: direction === "right" ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: string) => ({
    x: direction === "right" ? -300 : 300,
    opacity: 0,
  }),
};

function GoToNewsButton() {
  const router = useRouter();

  return (
    <Button
      justifySelf={"flex-end"}
      backgroundColor="btn-bg-2"
      color="btn-text-2"
      borderRadius="5px"
      width="fit-content"
      fontWeight={"bold"}
      paddingX={"5"}
      paddingY={"5"}
      _hover={{ opacity: "0.8" }}
      onClick={() => router.push("/news")}
    >
      <Text>See all news</Text>
      <Icon icon="lucide:circle-arrow-out-up-right" width={24} height={24} />
    </Button>
  );
}
