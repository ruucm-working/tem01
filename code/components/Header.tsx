import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Typograhpy } from "../Typograhpy";

export function Header(props) {
  return (
    <Frame width={props.width} height={props.height} background="" {...props}>
      <Frame
        width=""
        height=""
        style={{ marginLeft: "20px", marginBottom: "20px" }}
        bottom={0}
        background=""
      >
        <Typograhpy text={props.text} type={props.type} />
      </Frame>
    </Frame>
  );
}

Header.defaultProps = {
  width: "100%",
  height: 116,
  text: "Browse",
  type: "header-emphasized"
};

addPropertyControls(Header, {
  type: {
    type: ControlType.String
  },
  text: {
    type: ControlType.String
  }
});
