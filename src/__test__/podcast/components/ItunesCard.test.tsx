import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ItunesCard } from "../../../podcast/components";

describe("<ItunesCard/>", () => {
  //Snapshot Itunes Card
  it("ItunesCard snapshot ", () => {
    const { container } = render(
      <MemoryRouter>
        <ItunesCard artist={""} url_img={""} autor={""} id={""} />
      </MemoryRouter>
    );
    screen.debug();
    expect(container).toMatchSnapshot();
  });
});
