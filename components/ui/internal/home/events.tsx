import React from "react";

import { Stack, SimpleGrid, Text, Box, Heading, Button, HStack } from "@chakra-ui/react";
import Card from "@/components/ui/internal/card";
import { image } from "framer-motion/client";
import { HiOutlineExternalLink, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { useWindowType } from "@/hooks/use-window-type";
import Link from "next/link";

export default function Events() {
    const { isDesktop } = useWindowType();
    return (
        <Card>
            <Heading fontWeight={"bold"} size={isDesktop ? "5xl" : "2xl"} color={"text-3"}>
                Events
            </Heading>
            <Stack
                w="full"
                h="full"
                spaceY={4}
            >

                {fake_events.map((ev, i) => {
                    return (<Stack key={i} spaceY={10} borderRadius={"lg"} bgSize={"auto"}
                        bgRepeat={"no-repeat"} bgPos={"center"} padding={4} justify={"space-between"} bgImage={`url(${ev.image})`}>
                        <Stack
                            spaceY={3}
                            bgColor={"card-bg-2"}
                            p={4}
                            borderRadius={"xl"}
                        >
                            <Heading fontWeight={"bold"}>
                                {ev.title}
                            </Heading>
                            <Text>{ev.description}</Text>
                        </Stack>

                        <HStack>
                            <Button border={"1px solid"} cursor={"default"} borderRadius={"lg"} borderColor={"chip-border-1"} color={"chip-border-1"} bgColor={"chip-bg-1"}>
                                <HiOutlineLocationMarker /> {ev.location}
                            </Button>
                            <Button
                                border={"1px solid"}
                                cursor={"default"}
                                borderRadius={"lg"}
                                color={"chip-border-3"} borderColor={"chip-border-3"} bgColor={"chip-bg-2"}>
                                <HiOutlineClock /> {ev.time}
                            </Button>
                        </HStack>
                    </Stack>)
                })}

            </Stack>

            <Link href={"/events"}>
                <Button borderRadius={"lg"} size={isDesktop ? "lg" : "md"} bg={"btn-bg-1"} color={"btn-text-1"} fontWeight={"bold"}>See all events
                    <HiOutlineExternalLink />
                </Button>
            </Link>
        </Card>
    )
}

const fake_events = [
    {
        image: "/Fake-Images/Home/event-1.svg",
        title: "Introduction to Machine Learning Workshop",
        description: "Join us for an interactive workshop where we'll explore the fundamentals of Machine Learning. Learn about supervised learning, neural networks, and implement your first ML model using Python and TensorFlow.",
        time: "2:00 PM 2025-04-20",
        location: "Engineering Building, Room 305",
        link: "https://example.com/ml-workshop",
    },
    {
        image: "/Fake-Images/Home/event-1.svg",
        title: "Web Development Bootcamp",
        description: "A hands-on bootcamp covering modern web development technologies. Learn React, Node.js, and best practices for building responsive web applications. Perfect for beginners and intermediate developers.",
        time: "10:00 AM 2025-04-25",
        location: "Computer Lab 2",
        link: "https://example.com/web-bootcamp",
    },
    {
        image: "/Fake-Images/Home/event-1.svg",
        title: "Cybersecurity Seminar",
        description: "Expert-led seminar on current cybersecurity threats and defense mechanisms. Topics include network security, ethical hacking, and security best practices in software development.",
        time: "3:30 PM 2025-05-01",
        location: "Virtual Meeting",
        link: "https://example.com/cyber-seminar",
    }
];