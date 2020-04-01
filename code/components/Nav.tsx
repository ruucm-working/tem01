import * as React from "react";
import { Frame, Stack } from "framer";
import { Songs, Heart, Browse, Radio, Search } from "../assets/Icons/index";
import { colors } from "../shared/themes";
import { Typograhpy } from "../Typograhpy";

export function Nav(props) {
  const style = {
    borderTop: `1px solid ${colors.borderColor}`,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    WebkitBackdropFilter: "blur(50px)",
    backdropFilter: "blur(6px)"
  };
  return (
    <Frame width={props.width} height={props.height} style={style} {...props}>
      <Stack
        width="100%"
        height={props.height - 30}
        direction="horizontal"
        background=""
      >
        <Stack width="1fr" height="100%" direction="vertical" gap={5}>
          <Frame size="50%" background="">
            <Songs color={colors.labelSecondary} />
          </Frame>
          <Typograhpy
            text="Library"
            type="nav-label"
            align="center"
            lineType="inactive"
          />
        </Stack>
        <Stack width="1fr" height="100%" direction="vertical" gap={5}>
          <Frame size="50%" background="">
            <Heart color={colors.labelSecondary} />
          </Frame>
          <Typograhpy
            text="For you"
            type="nav-label"
            align="center"
            lineType="inactive"
          />
        </Stack>
        <Stack width="1fr" height="100%" direction="vertical" gap={5}>
          <Frame size="50%" background="">
            <Browse color={colors.primaryColor} />
          </Frame>
          <Typograhpy
            text="Browse"
            type="nav-label"
            align="center"
            lineType="active"
          />
        </Stack>
        <Stack width="1fr" height="100%" direction="vertical" gap={5}>
          <Frame size="50%" background="">
            <Radio color={colors.labelSecondary} />
          </Frame>
          <Typograhpy
            text="Radio"
            type="nav-label"
            align="center"
            lineType="inactive"
          />
        </Stack>
        <Stack width="1fr" height="100%" direction="vertical" gap={5}>
          <Frame size="50%" background="">
            <Search color={colors.labelSecondary} />
          </Frame>
          <Typograhpy
            text="Search"
            type="nav-label"
            align="center"
            lineType="inactive"
          />
        </Stack>
      </Stack>
    </Frame>
  );
}

Nav.defaultProps = {
  width: 414,
  height: 84
};
