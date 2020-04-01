import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  Stack,
  Page,
  Data,
} from "framer";
import { StatusBar } from "../Status";
import { Header } from "../components/Header";
import { MainSection } from "../components/MainSection";
import { SongSection } from "../components/SongSection";
import { Player } from "../Player/Player";
import { Nav } from "../components/Nav";
import { useState } from "react";

const appState = Data({
  isPlayerTapped: false,
  playerState: {
    height: 64,
    bottom: 92,
  },
});

export function Comp1({ prop1, ...rest }) {
  const [activeLayer, setActiveLayer] = useState("");
  return (
    <Frame width={414} height={896} background="">
      <StatusBar appearance={"dark"} />
      <Stack width={414} height={896 - 34} gap={0}>
        <Header text={"Browse"} />
        <Page
          width={414}
          height={340}
          gap={10}
          contentWidth="auto"
          style={{
            paddingLeft: "20px",
            marginBottom: "20px",
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
      <Player
        state={appState.playerState}
        activeLayer={activeLayer}
        onTap={() => {
          console.log("clicked");
          appState.playerState.height = 842;
          appState.playerState.bottom = 0;
          setActiveLayer("player");
        }}
      />
      <Nav bottom={0} />
    </Frame>
  );
}

Comp1.defaultProps = {
  prop1: "Default prop1 Value",
};

addPropertyControls(Comp1, {
  prop1: {
    type: ControlType.String,
  },
});
