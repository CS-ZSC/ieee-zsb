import { Stack } from "@chakra-ui/react";
import Committee from "../../committees/committee";

export function Tracks({ tracks, color_scheme }: { tracks: TrackData[], color_scheme?: string }) {
    return (
        <Stack spaceY={4}>
            {tracks.map((track, index) => (
                <Committee
                    key={index}
                    committee={track}
                    borderColor={color_scheme}
                    positionBgColor={"primary-12"}
                />
            ))}
        </Stack>
    );
}