import { useWindowType } from "@/hooks/use-window-type";
import { Avatar, Box, Heading, HStack, IconButton, Separator, Stack, Text, useClipboard, Wrap } from "@chakra-ui/react";
import { HiOutlineMail, HiCheck } from "react-icons/hi";

import React from "react";
import Card from "@/components/ui/internal/card";
import { Tooltip } from "@/components/ui/tooltip";
import { toaster } from "@/components/ui/toaster"
interface Position {
    name: string;
    position: string;
    avatarSrc: string;
    email: string;
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
                    Meet the heart and soul behind this website — a team of passionate and dedicated students who pour their energy and creativity into making it extraordinary. Here are our amazing Executive Board members!
                </Text>
            </Stack>
            <Stack w="full">
                <Heading alignSelf={"center"}>Executive Board</Heading>
                <Separator size={"lg"} borderColor={"secondary"} />
            </Stack>

            <Wrap gap={2} padding={8} justify={"space-around"} borderColor={"text-5"} borderWidth={"4px"} borderRadius={"2xl"} borderStyle={"dashed"} w="full" h="full">
                {positions.map((pos, i) => <PositionCard position={pos} key={i} />)}
            </Wrap>

        </Card>

    );
}


function PositionCard({ position }: { position: Position }) {
    const { isDesktop } = useWindowType();
    const clipboard = useClipboard({ value: position.email, timeout: 2000 });
    return (
        <Stack w={isDesktop ? "240px" : "160px"} align={"center"} spaceY={0}>
            <Box h="full" w="full">

                <Avatar.Root
                    w={"full"}
                    h={"full"}
                    shape="rounded"
                >
                    <Avatar.Fallback name={position.name} />
                    <Avatar.Image
                        src={position.avatarSrc}
                        alt={position.name}
                    />
                </Avatar.Root>
            </Box>
            <Stack w="full" align={"center"} justify={"center"} spaceY={-2} m={2}>
                <Heading textAlign={"center"} size={isDesktop ? "lg" : "md"}>{position.name}</Heading>
                <HStack w="full" justify={"center"} spaceX={1} align={"center"}>
                    <Text textAlign={"center"} fontSize={isDesktop ? "sm" : "xs"}>{position.position}</Text>
                    <Tooltip content={position.email} interactive openDelay={100} showArrow closeDelay={100}>
                        <IconButton variant={"plain"} color={"white"} p={1} size={"xs"} onClick={() => {
                            clipboard.copy();
                            toaster.create({
                                title: "Email Copied",
                                description: `The email has been copied to your clipboard. Contect now with our ${position.position}!`,
                                type: "success",
                                duration: 2000,
                                placement: "top",
                            });

                        }} aria-label="Search database">
                            {clipboard.copied ? <HiCheck  /> : <HiOutlineMail  />}
                        </IconButton>
                    </Tooltip>
                </HStack>
            </Stack>
        </Stack>
    );

}

const positions: Position[] = [
    {
        name: "Shahd Elbendary",
        position: "Chairperson",
        avatarSrc: "/Images/board/chairperson.webp",
        email: "shahd.elbendary@ieee-zsb.org"
    },
    {
        name: "Amr Yasser Saber",
        position: "Vice Technical Chairman",
        avatarSrc: "/Images/board/vice-technical.webp",
        email: "amr.yasser@ieee-zsb.org"
    },
    {
        name: "Mustafa Mohamed",
        position: "Vice Managerial Chairman",
        avatarSrc: "/Images/board/vice-managerial.webp",
        email: "mustafa.mohammed@ieee-zsb.org"
    },
    {
        name: "Samar Nafea",
        position: "Secretary",
        avatarSrc: "/Images/board/secretary.webp",
        email: "samar.nafea@ieee-zsb.org"
    },
    {
        name: "Mohamed Tarek",
        position: "Branding Officer",
        avatarSrc: "/Images/board/branding-officer.webp",
        email: "mohamed.tarek@ieee-zsb.org"
    },
    {
        name: "Sarah Kahwash",
        position: "Treasurer",
        avatarSrc: "/Images/board/treasurer.webp",
        email: "sarah.kahwash@ieee-zsb.org"
    },
];
