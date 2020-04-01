import * as React from "react";
import { Frame, Stack } from "framer";
import { colors } from "../shared/themes";
import { Typograhpy } from "../Typograhpy";
import { ScrollComp } from "./Scroll";

export function SongSection(props) {
  return (
    <Stack
      width={props.width}
      height={props.height}
      background=""
      gap={0}
      distribution="start"
      center="x"
    >
      <Stack
        style={{
          borderTop: `1px solid ${colors.borderColor}`
        }}
        width={props.width - 40}
        height="48px"
        direction="horizontal"
        distribution="space-between"
        background=""
      >
        <Typograhpy text="Must Have" type="shelf-title" />
        <Typograhpy text="See all" type="see-all" />
      </Stack>
      <Frame
        background=""
        width="100%"
        height="230px"
        style={{
          padding: "0px"
        }}
      >
        <ScrollComp />
      </Frame>
    </Stack>
  );
}

SongSection.defaultProps = {
  width: 414,
  height: 310
};
