import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Card from "../../card";
import { useWindowType } from "@/hooks/use-window-type";

export function TrackBrief({ name, description, imgSrc, showMore, setShowMore }: {
    name: string;
    description: string;
    imgSrc: string;
    showMore: boolean;
    setShowMore: (value: boolean) => void;
}) {
    return (
        <Card>
            <HStack justify={"space-between"} w="full" spaceX={8}>
                <Stack justify="space-between" h="full">
                    <Text>
                        {description}
                    </Text>

                    <Button
                        onClick={() => setShowMore(!showMore)} colorScheme="blue" variant="outline" mt={2}
                        width={"fit"}
                        bgColor={"primary-1"}
                        paddingY={10}
                        rounded="xl"
                        padding={"10px 20px"}
                        justifyContent={"center"}
                        textAlign="center"
                        transition="all"
                        _hover={{ backgroundColor: "primary-10" }}
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </Button>
                </Stack>
                <Image
                    src={imgSrc}
                    alt={`${name} image`}
                    w="full"
                    rounded="2xl"
                />
            </HStack>
        </Card>
    );
}