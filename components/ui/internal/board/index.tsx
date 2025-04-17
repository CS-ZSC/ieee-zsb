import { useWindowType } from "@/hooks/use-window-type";
import { Avatar, Heading, Separator, Stack, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import Card from "@/components/ui/internal/card";

interface Position {
    name: string;
    position: string;
    avatarSrc: string;

}
interface BoardProps {
    description?: string;
    title?: string;
    positions?: Position[];
}


export default function Board({ }: BoardProps) {
    const { isDesktop } = useWindowType();
    return (
        <Card>
            <Stack align={"center"}>
                <Heading fontWeight={"bold"} size={isDesktop ? "4xl" : "2xl"} color={"text-3"}>
                    Board
                </Heading>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis nihil asperiores ex quae voluptates accusantium quam? Officia placeat ratione soluta excepturi delectus officiis. Rem quae tempore reprehenderit corporis nihil.
                </Text>
            </Stack>
            <Stack w="full">
                <Heading alignSelf={"center"}>Executive Board</Heading>
                <Separator size={"lg"} borderColor={"secondary"} />
            </Stack>

            <Wrap gap={2} padding={8} justify={"space-around"} borderColor={"text-5"} borderWidth={"4px"} borderRadius={"2xl"} borderStyle={"dashed"} w="full" >
                {positions.map((position, i) => {
                    return (
                        <Stack w={isDesktop ? "240px" : "90px"} align={"center"} key={i} spaceY={-2}>
                            <Avatar.Root
                                w={isDesktop ? "240px" : "90px"}
                                h={isDesktop ? "240px" : "90px"}
                                shape="rounded"
                            >
                                <Avatar.Fallback name={position.name} />
                                <Avatar.Image
                                    src={position.avatarSrc}
                                    alt={position.name}
                                />
                            </Avatar.Root>
                            <Stack w="full" justify={"center"}>

                                <Heading textAlign={"center"} size={isDesktop ? "lg" : "md"}>{position.name}</Heading>
                                <Text textAlign={"center"} size={isDesktop ? "md" : "sm"}>{position.position}</Text>
                            </Stack>
                        </Stack>
                    )
                })}
            </Wrap>

        </Card>

    );
}

const positions: Position[] = [
    {
        name: "Amira Nassar",
        position: "Chairperson",
        avatarSrc: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
        name: "Hassan Mahmoud",
        position: "Vice Chairperson",
        avatarSrc: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        name: "Nour El-Din",
        position: "Secretary",
        avatarSrc: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        name: "Khaled Saeed",
        position: "Treasurer",
        avatarSrc: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        name: "Mona Hafez",
        position: "Public Relations Officer",
        avatarSrc: "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
        name: "Tarek Zaki",
        position: "Event Coordinator",
        avatarSrc: "https://randomuser.me/api/portraits/men/15.jpg"
    },
];
