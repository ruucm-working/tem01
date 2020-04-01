import * as React from "react";
import { Frame, Stack } from "framer";
import { Play, Forward } from "../assets/Icons/index";

import { colors } from "../shared/themes";
import { Typograhpy } from "../Typograhpy";

export function Song(props) {
  return (
    <Frame width={props.width} height={props.height} background="">
      <Stack gap={0} width="100%">
        <Frame
          width="100%"
          height={props.width}
          borderRadius="10px"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg")`
          }}
        ></Frame>
        <Stack
          width="100%"
          height={230 - 180}
          gap={0}
          style={{
            paddingTop: "5px"
          }}
        >
          <Frame width="100%" height="1fr" background="">
            <Typograhpy text="오늘의 히트곡" type="caption" />
          </Frame>
          <Frame width="100%" height="1fr" background="">
            <Typograhpy
              text="Apple Music"
              type="caption"
              customColor={true}
              color={colors.labelSecondary}
            />
          </Frame>
        </Stack>
      </Stack>
    </Frame>
  );
}

Song.defaultProps = {
  width: 180,
  height: 230
};
