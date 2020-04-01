import * as React from "react";
import {
  Frame,
  Page,
  addPropertyControls,
  ControlType,
  Stack,
  Scroll
} from "framer";
import { Header } from "../components/Header";
import { MainSection } from "../components/MainSection";
import { SongSection } from "../components/SongSection";
import { PlayerMini } from "../components/PlayerMini";
import { Nav } from "../components/Nav";

export function Browse({ prop1, currPage, ...rest }) {
  return (
    <Frame width={414} height={896} background="">
      {/* page */}
      <Page width={414} height={896} currentPage={currPage}>
        <Scroll direction="vertical">
          <Stack width="100%" height="100%" direction="vertical" gap={0}>
            <Frame
              width="100%"
              height={150}
              style={{ paddingLeft: "20px" }}
              background=""
            >
              <Header bottom={5} />
            </Frame>
            <Page
              width={414}
              height={340}
              gap={10}
              contentWidth="auto"
              style={{
                paddingLeft: "20px",
                marginBottom: "20px"
              }}
              //   contentHeight="auto"
            >
              <MainSection />
              <MainSection />
              <MainSection />
              <MainSection />
            </Page>

            <SongSection />
          </Stack>
        </Scroll>
        <Frame width={414} height="">
          000
        </Frame>
      </Page>

      {/* player & nav */}
      <Stack direction="vertical" bottom={34} width="" gap={0} height="">
        <PlayerMini />
        <Nav />
      </Stack>
    </Frame>
  );
}

Browse.defaultProps = {
  prop1: "Default prop1 Value",
  currPage: 0
};

addPropertyControls(Browse, {
  prop1: {
    type: ControlType.String
  },
  currPage: {
    type: ControlType.Number,
    displayStepper: true
  }
});
