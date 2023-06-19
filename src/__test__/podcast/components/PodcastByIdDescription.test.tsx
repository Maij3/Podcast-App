import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PodcastByIdDescription } from "../../../podcast/components/PodcastByIdDescription";

describe("<PodcastByIdDescription/>", () => {
  //Snapshot Itunes Card
  it("PodcastByIdDescription snapshot ", () => {
    const { container } = render(
      <MemoryRouter>
        <PodcastByIdDescription
          audio={
            "https://www.podtrac.com/pts/redirect.mp3/chrt.fm/track/35F11F/traffic.megaphone.fm/MOWM5486612603.mp3?updated=1684229072"
          }
          description={
            "It's Episode 50 of the Friday Night Karaoke Podcast, and the theme of the week was #FNKDedication."
          }
          name={"Friday Night Karaoke"}
        />
      </MemoryRouter>
    );
    screen.debug();
    expect(container).toMatchSnapshot();
  });
});
