// TODO: little buggy; need to fix
import React, { useState } from 'react';
import {
    Box,
    Text,
    VStack,
    HStack,
    Button,
    Flex,
    Stack,
    List,
} from '@chakra-ui/react';
import Card from '../../card';
import { useWindowType } from '@/hooks/use-window-type';
import { SeasonData } from '@/data/chapters';
export function Timeline({ seasons }: { seasons: SeasonData[] }) {
    return (
        <HStack
            w="full"
            h="full"
            align="center"
            justify="center"
            py={10}
            overflowX={"auto"}
        >
            <HStack
                spacing={{ base: 4, md: 8 }}
                align="flex-start"
                position="relative"
                width="full"
                h="full"
                overflowX={"auto"}
            >

                <Flex
                    flex={1}
                    overflowX="auto"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    w="full"
                    h="full"
                    sx={{
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#1a2a4a',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#4a5a7a',
                            borderRadius: '10px',
                            border: '2px solid #1a2a4a',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: '#5a6a8a',
                        },
                    }}
                >
                    <Box
                        position="absolute"
                        top="50%"
                        left="0"
                        right="0"
                        height="2px"
                        bg="gray.600"
                        transform="translateY(-50%)"
                        zIndex={1}
                    />

                    <HStack overflowX={"auto"} h="full" position={"relative"} spacing={{ base: 2, md: 16 }} align="flex-start" px={{ base: 0, md: 8 }}>
                        {seasons.map((item, index) => (
                            <TimelineItem key={item.year} item={item} isTop={index % 2 == 0} />
                        ))}
                    </HStack>
                </Flex>


            </HStack>

        </HStack>
    );
}

const TimelineItem = ({ item, isTop }: { item: SeasonData, isTop: boolean }) => {
    const [showFullText, setShowFullText] = useState(false);
    const { isDesktop } = useWindowType();

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <VStack flexShrink={0} width={isDesktop ? "400px" : "250px"} zIndex={2} h={"full"}>
            <Stack
                fontSize={isDesktop ? "2xl" : "lg"}
                p={4}
                zIndex={3}
                w={isDesktop ? "80px" : "60px"}
                h={isDesktop ? "80px" : "60px"}
                rounded={"full"}
                borderColor={"gray.600"}
                borderWidth={"2px"}
                fontWeight="bold"
                bgColor={"bg"}
                align={"center"}
                justify={"center"}
                position={"absolute"}
                top={isDesktop ? "47%" : "47%"}
            >
                <Text>
                    {item.year}
                </Text>
            </Stack>
            <Stack flexDir={isTop ? "column-reverse" : "column"}
                align={"center"} justify="center" width="full"  spaceY={0}>
                <Box
                    width="2px"
                    height="100px"
                    bg="gray.600"
                    mb={isTop ? "430px" : "0"}
                    mt={isTop ? "0" : "430px"}
                // display={"block"}
                />

                <TimelineCard
                    summary={item.summary}
                    showFullText={showFullText}
                    toggleText={toggleText}
                />
            </Stack>

        </VStack >
    );
};
/* eslint-disable @typescript-eslint/no-unused-vars */
const TimelineCard = ({ summary, showFullText, toggleText }: { summary: string[]; showFullText: boolean; toggleText: () => void }) => {
    return (
        <Card>
            <Text fontSize="md" fontWeight="semibold">
                Season summary
            </Text>
            <List.Root>
                {summary.map((point, i) => <List.Item key={i}>{point}</List.Item>)}
            </List.Root>
            <Button
                variant="outline"
                width={"fit"}
                bgColor={"primary-1"}
                paddingY={10}
                rounded="xl"
                padding={"10px 20px"}
                justifyContent={"center"}
                textAlign="center"
                color="white"
                transition="all"
                _hover={{ backgroundColor: "primary-10" }}
            >
                {showFullText ? 'See less' : 'See more'}
            </Button>
        </Card>
    );
};