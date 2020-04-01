import * as React from "react";
import { Frame, Stack, Scroll } from "framer";

import { colors } from "../shared/themes";
import { Typograhpy } from "../Typograhpy";
import { Song } from "./Song";

export function ScrollComp(props) {
  return (
    <Scroll
      background=""
      width={props.width}
      height={props.height}
      direction="horizontal"
      style={{ paddingLeft: "20px" }}
    >
      <Stack direction="horizontal" width="800px" height="100%">
        <Song />
        <Song />
        <Song />
        <Song />
      </Stack>
    </Scroll>
  );
}

ScrollComp.defaultProps = {
  width: "100%",
  height: "100%"
};
