import * as React from "react";
import { Frame, Stack } from "framer";
import { Play, Forward } from "../assets/Icons/index";
import { Typograhpy } from "../Typograhpy";

export function PlayerMini(props) {
  return (
    <Frame
      width={props.width}
      height={props.height}
      background="rgba(255, 255, 255, 0.8)"
      style={{
        WebkitBackdropFilter: "blur(20px)"
      }}
    >
      <Stack
        // style={{ padding: "0 10px" }}
        width="100%"
        height="100%"
        direction="horizontal"
        gap={0}
      >
        <Frame width="1fr" height="100%" background="">
          <Frame
            size={50}
            center
            borderRadius="5px"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://66.media.tumblr.com/be8f373f8793887160929bdd469e7227/tumblr_oktuijhiDD1tgerjdo1_400.png")`
            }}
          ></Frame>
        </Frame>
        <Frame width="2.5fr" height="100%" background="">
          <Frame width="100%" height="" background="" center="y">
            <Typograhpy text="Dressed In black" type="label" align="left" />
          </Frame>
        </Frame>
        <Frame width="1fr" height="100%" background="">
          <Frame width="40%" height="auto" center background="">
            <Play />
          </Frame>
        </Frame>
        <Frame width="1fr" height="100%" background="">
          <Frame width="70%" height="auto" center background="">
            <Forward />
          </Frame>
        </Frame>
      </Stack>
    </Frame>
  );
}

PlayerMini.defaultProps = {
  width: 414,
  height: 64
};
