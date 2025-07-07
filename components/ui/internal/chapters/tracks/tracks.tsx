import { Stack } from "@chakra-ui/react";
import { Track } from "./track";

export function Tracks({ tracks, color_scheme }: { tracks: TrackData[], color_scheme?: string }) {
    return (
        <Stack spaceY={4}>
            {tracks.map((track, index) => (
                <Track
                    key={index}
                    track={track}
                    color_scheme={color_scheme}
                />
            ))}
        </Stack>
    );
}