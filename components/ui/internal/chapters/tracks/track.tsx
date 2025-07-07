import { TrackData } from "@/data/chapters";
import { Heading, Stack } from "@chakra-ui/react";
import { TrackBrief } from "./track-breif";
import { useState } from "react";
import AnimatedCard from "../../animatedCard";
import { TrackDetails } from "./track-details";

export function Track({ track, color_scheme }: { track: TrackData; color_scheme: string }) {
    const [showMore, setShowMore] = useState<boolean>(false);
    return (
        <Stack justify={"space-between"} h="full">
            <Heading ml={8} as="h2" size="2xl" fontWeight={"bold"}>
                {track.name}
            </Heading>
            <TrackBrief
                name={track.name}
                description={track.description}
                imgSrc={track.img}
                showMore={showMore}
                setShowMore={setShowMore}

            />

            {showMore &&
                <AnimatedCard>
                    <TrackDetails track={track} color_scheme={color_scheme} />
                </AnimatedCard>
            }
        </Stack>
    )
}