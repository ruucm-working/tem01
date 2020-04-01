import * as React from "react";
import styled, { css } from "styled-components";
import {
  ActionGlyph,
  Chevron,
  Heart,
  List,
  More,
  Search,
  VolumeMax,
  Airdrop,
  VolumeMin,
  Browse,
  Forward,
  Pause,
  Play,
  Radio,
  Repeat,
  RepeatOne,
  Shuffle,
  Songs,
  Lyrics,
} from "./assets/Icons";
import { addPropertyControls, ControlType, Frame, Stack } from "framer";

const Rotate180 = styled.div`
  transform: rotate(180deg);
  width: 100%;
  height: 100%;
`;

export function Icon({ icon, color, ...props }) {
  return (
    <Frame width="100%" height="100%" background="" {...props}>
      {(() => {
        switch (icon) {
          case "ActionGlyph":
            return <ActionGlyph color={color} />;
          case "ChevronRight":
            return <Chevron color={color} />;
          case "ChevronLeft":
            return (
              <Rotate180>
                <Chevron color={color} />
              </Rotate180>
            );
          case "Heart":
            return <Heart color={color} />;
          case "List":
            return <List color={color} />;
          case "More":
            return <More color={color} />;
          case "Search":
            return <Search color={color} />;
          case "VolumeMin":
            return <VolumeMin color={color} />;
          case "VolumeMax":
            return <VolumeMax color={color} />;
          case "Airdrop":
            return <Airdrop color={color} />;
          case "Browse":
            return <Browse color={color} />;
          case "Forward":
            return <Forward color={color} />;
          case "Backward":
            return (
              <Rotate180>
                <Forward color={color} />
              </Rotate180>
            );
          case "Pause":
            return <Pause color={color} />;
          case "Play":
            return <Play color={color} />;
          case "Radio":
            return <Radio color={color} />;
          case "Repeat":
            return <Repeat color={color} />;
          case "RepeatOne":
            return <RepeatOne color={color} />;
          case "Shuffle":
            return <Shuffle color={color} />;
          case "Songs":
            return <Songs color={color} />;
          case "Lyrics":
            return <Lyrics color={color} />;
          default:
            return "Add Vaild Icon Property";
        }
      })()}
    </Frame>
  );
}

Icon.defaultProps = {
  icon: "Browse",
  color: "#000",
};
