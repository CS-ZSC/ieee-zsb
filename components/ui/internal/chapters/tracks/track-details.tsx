import { TrackData } from "@/data/chapters";
import Card from "../../card";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import { Position } from "@/data/position";
import Board from "../board";

export function TrackDetails({ track, color_scheme }: { track: TrackData, color_scheme: string }) {
    return (
        <Card>
            <Stack spaceY={6}>
                <Goals goals={track.goals} color_scheme={color_scheme} />
                <Activities activities={track.activities} />
                <Heads heads={track.heads} />
            </Stack>
        </Card>
    )
}


function Goals({ goals, color_scheme }: { goals: string[], color_scheme: string }) {
    return (
        <Stack spaceY={4} justify="start" w="full">
            <Heading justifySelf={"left"} px={6} size="2xl">
                Goals
            </Heading>
            <Card bgColor="primary-3">
                <Stack textAlign="left" spacing={4} justify="start" w="full">
                    <Box borderLeftColor={color_scheme} borderLeftWidth={4} py={1} paddingLeft={4} w="full" textAlign={"left"}>
                        {goals[0]}
                    </Box>

                    {goals.slice(1).map((goal, index) => (
                        <Box key={index} paddingLeft={4} py={1} >
                            {goal}
                        </Box>
                    ))}
                </Stack>
            </Card>
        </Stack>

    );
}

function Activities({ activities }: { activities: { title: string, description: string }[] }) {
    const { isDesktop } = useWindowType();

    return (
        <Stack spaceY={4} justify="start" w="full">

            <Heading justifySelf={"left"} px={6} size="2xl">
                Activites
            </Heading>
            <SimpleGrid justify={"center"} columns={isDesktop ? 3 : 2} gap={4}>
                {activities.map((activity, index) => (
                    <Card key={index} bgColor="primary-3" mt={4} mb={2} p={4}>
                        <Stack spacing={2} justify={"space-between"} h="full">
                            <Heading textAlign={"center"}>{activity.title}</Heading>
                            <Text>{activity.description}</Text>
                        </Stack>
                    </Card>
                ))}
            </SimpleGrid>
        </Stack>

    );
}

function Heads({ heads }: { heads: Position[] }) {

    return (
        <Stack spaceY={4} justify="start" w="full">
            <Heading>Heads</Heading>
            <Board board={heads} />
        </Stack>
    );
}