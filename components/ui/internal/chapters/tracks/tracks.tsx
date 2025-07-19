import Committee from "../../committees/committee";
import { TrackData } from "@/data/chapters";
import Container from "../../container";

export function Tracks({
  tracks,
  color_scheme = "primary-1",
}: {
  tracks: TrackData[];
  color_scheme?: string;
}) {
  return (
    <Container gap={10}>
      {tracks.map((track, index) => (
        <Committee
          key={index}
          committee={track}
          borderColor={color_scheme}
          positionBgColor={"primary-12"}
        />
      ))}
    </Container>
  );
}
