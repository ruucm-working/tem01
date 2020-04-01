import * as React from "react";
import {
  Frame,
  Stack,
  animate,
  addPropertyControls,
  ControlType
} from "framer";
import { colors } from "../shared/themes";
import { Typograhpy } from "../Typograhpy";
import {
  Play,
  Forward,
  VolumeMin,
  VolumeMax,
  More,
  List,
  Repeat,
  Shuffle
} from "../assets/Icons";
import { PlayerMini } from "../components/PlayerMini";

export function Player(props) {
  console.log(props.state);
  return (
    <Stack
      width={props.width}
      background="pink"
      gap={0}
      borderRadius={props.borderRadius}
      animate={{
        height: props.activeLayer === 'player' ? 842 : 64,
        bottom: props.activeLayer === 'player' ? 0 : 92,
      }}
      {...props}
    >
      {/* album cover */}
      <Frame width="100%" height={props.width} background="" overflow="hidden">
        <Frame
          width={props.width}
          height={64}
          background="rgba(255, 255, 255, 0.8)"
          style={{
            WebkitBackdropFilter: "blur(20px)"
          }}
          top={0}
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
                  backgroundImage: `url("https://pgnqdrjultom1827145.cdn.ntruss.com/img/66/ba/66babea39e17dd90c66d6b8a13ba982a841032ea31dad8d4a56bd29d8e5d988c_v1.jpg")`
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
      </Frame>

      <Frame width={"100%"} height="" opacity={0}>
        {/* title */}
        <Frame width="100%" height="73px" background="">
          <Stack
            width={props.width - 60}
            height="100%"
            center
            direction="horizontal"
          >
            <Stack
              width="4fr"
              height="100%"
              alignment="start"
              distribution="center"
            >
              <Typograhpy text="Power" type="title-emphasized" />
              <Typograhpy text="Kanye West" type="title" />
            </Stack>
            <Frame width="1fr" height="100%" background="">
              <Frame
                size="25px"
                borderRadius="30px"
                background={colors.primaryColor}
                opacity={0.1}
                center="y"
                right={0}
              />
              <Frame size="20px" background="" center="y" right={2}>
                <More color={colors.primaryColor} />
              </Frame>
            </Frame>
          </Stack>
        </Frame>

        {/* time */}
        <Frame width="100%" height="54px" background="">
          <Stack width={props.width - 60} height="" center>
            <Frame width="100%" height="2px" background={colors.borderColor}>
              <Frame
                width="5px"
                height="5px"
                borderRadius="5px"
                background="grey"
                center="y"
              />
            </Frame>
            <Stack
              width="100%"
              height="5px"
              direction="horizontal"
              distribution="space-between"
            >
              <Typograhpy text="0:00" type="nav-label" lineType="inactive" />
              <Typograhpy text="-4:35" type="nav-label" lineType="inactive" />
            </Stack>
          </Stack>
        </Frame>

        {/* control */}
        <Frame width="100%" height="141px" background="">
          <Stack
            width={props.width - 100}
            height="100%"
            center
            direction="horizontal"
            gap={0}
          >
            <Frame width="1fr" height="100%" background="">
              <Frame width="70%" height="" center rotate={180} background="">
                <Forward />
              </Frame>
            </Frame>
            <Frame width="2fr" height="100%" background="">
              <Frame width="40%" height="" center background="">
                <Play />
              </Frame>
            </Frame>
            <Frame width="1fr" height="100%" background="">
              <Frame width="70%" height="" center background="">
                <Forward />
              </Frame>
            </Frame>
          </Stack>
        </Frame>

        {/* volume */}
        <Frame width="100%" height="54px" background="">
          <Stack
            width={props.width - 60}
            height=""
            center
            direction="horizontal"
          >
            <Frame width="0.7fr" height="" background="">
              <VolumeMin color={colors.labelSecondary} />
            </Frame>
            <Frame width="9fr" height="2px" background={colors.borderColor}>
              <Frame width="80%" height="100%" background="grey"></Frame>
              <Frame
                size="20px"
                borderRadius="20px"
                background="white"
                shadow="0px 1px 5px 1px rgba(0,0,0,0.2)"
                center="y"
                left="80%"
              />
            </Frame>
            <Frame width="0.7fr" height="" background="">
              <VolumeMax color={colors.labelSecondary} />
            </Frame>
          </Stack>
        </Frame>

        {/* bottom */}
        <Frame width="100%" height="80px" background="">
          <Stack
            width={props.width - 100}
            height="100%"
            direction="horizontal"
            center
            distribution="center"
            gap={60}
          >
            <Frame width="40px" height="50%" background="">
              <Frame size={30} center background="">
                <List color={colors.primaryColor} />
              </Frame>
            </Frame>
            <Frame width="40px" height="50%" background="">
              <Repeat color={colors.primaryColor} />
            </Frame>
            <Frame width="40px" height="50%" background="">
              <Shuffle color={colors.primaryColor} />
            </Frame>
          </Stack>
        </Frame>
      </Frame>
    </Stack>
  );
}

Player.defaultProps = {
  width: 414,
  height: 64,
  borderRadius: "0px 0px 0 0"
};

addPropertyControls(Player, {
  height: {
    type: ControlType.Number
  }
});
