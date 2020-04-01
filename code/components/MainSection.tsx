import * as React from "react";
import { Frame, Stack } from "framer";
import { colors } from "../shared/themes";
import { Typograhpy } from "../Typograhpy";

export function MainSection(props) {
  return (
    <Stack
      width={414 - 40}
      height={props.height}
      gap={0}
      center="x"
      style={{
        borderTop: `1px solid ${colors.borderColor}`
      }}
    >
      <Stack
        width="100%"
        height={76}
        gap={0}
        style={{
          marginBottom: "10px"
        }}
      >
        <Frame width="100%" height="1fr" background="">
          <Typograhpy
            text="UPDATED PLAYLIST"
            type="footnote-emphasized"
            style={{ marginTop: "10px" }}
          />
        </Frame>
        <Frame width="100%" height="1fr" background="">
          <Typograhpy text="New Music Daily" type="headline" />
        </Frame>
        <Frame width="100%" height="1fr" background="">
          <Typograhpy text="Apple Music" type="headline" lineType="line-2" />
        </Frame>
      </Stack>
      <Frame
        width="100%"
        height={250}
        style={{
          backgroundSize: "cover",
          backgroundPositionX: "center",
          borderRadius: "4px",
          backgroundImage: `url("https://www.apfeltalk.de/magazin/wp-content/uploads/2019/08/New-Music-Daily.jpg")`
        }}
      ></Frame>
    </Stack>
  );
}

MainSection.defaultProps = {
  width: 414 - 40,
  height: 336
};
