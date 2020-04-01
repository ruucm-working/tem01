import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import styled, { css } from "styled-components";
import { colors } from "./shared/themes";

const P = styled.p`
margin: 0px;
padding: 0px;
  ${props =>
    props.type === "header-emphasized" &&
    css`
      font-family: "SF Pro Display";
      font-weight: 700;
      font-size: 34px;
      line-height: 1;
      letter-spacing: 0.5px;
      color: ${colors.labelPrimary};
    `}
  ${props =>
    props.type === "footnote-emphasized" &&
    css`
      font-family: "SF Pro Text";
      font-weight: 500;
      font-size: 11px;
      letter-spacing: 0.16px;
      color: ${colors.primaryColor};
    `}
  ${props =>
    props.type === "headline" &&
    css`
      font-family: "SF Pro Display";
      font-size: 22px;
      letter-spacing: 0.33px;
      color: ${(() => {
        switch (props.lineType) {
          case "line-1":
            return colors.labelPrimary;
          case "line-2":
            return colors.labelSecondary;
          default:
            break;
        }
      })()};
    `}
  ${props =>
    props.type === "shelf-title" &&
    css`
      font-family: "SF Pro Display";
      font-weight: 700;
      font-size: 22px;
      letter-spacing: 0.33px;
      color: ${colors.shelfHeader};
    `}
  ${props =>
    props.type === "see-all" &&
    css`
      font-family: "SF Pro Text";
      font-size: 16.5px;
      letter-spacing: -0.2px;
      color: ${colors.primaryColor};
    `}
  ${props =>
    props.type === "caption" &&
    css`
      font-family: "SF Pro Text";
      font-size: 14.5px;
      letter-spacing: 0;
      color: ${(() => {
        switch (props.lineType) {
          case "line-1":
            return colors.labelPrimary;
          case "line-2":
            return colors.labelSecondary;
          default:
            break;
        }
      })()};
    `}
  ${props =>
    props.type === "label" &&
    css`
      font-family: "SF Pro Text";
      font-size: 16.5px;
      letter-spacing: -0.15px;
      color: ${colors.labelPrimary};
    `}
  ${props =>
    props.type === "title-emphasized" &&
    css`
      font-family: "SF Pro Text";
      font-weight: 600;
      font-size: 22px;
      letter-spacing: -0.8px;
      color: ${colors.shelfHeader};
    `}
  ${props =>
    props.type === "title" &&
    css`
      font-family: "SF Pro Text";
      font-size: 22px;
      letter-spacing: -1.1px;
      color: ${colors.primaryColor};
    `}
  ${props =>
    props.type === "nav-label" &&
    css`
      font-family: "SF Pro Text";
      font-weight: 500;
      font-size: 10px;
      letter-spacing: 0.1px;
      color: ${(() => {
        switch (props.lineType) {
          case "active":
            return colors.primaryColor;
          case "inactive":
            return colors.labelSecondary;
          default:
            break;
        }
      })()};
    `}
  ${props =>
    props.type === "header" &&
    css`
      font-family: "SF Pro Text";
      font-weight: 500;
      font-size: 17.5px;
      letter-spacing: -0.5px;
    `}
  /* Custom Color Support */
  ${props =>
    props.customColor &&
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
/* background: pink; */
`;

const variants = {
  active: {
    backgroundColor: "#f00",
    fontSize: 50
  },
  inactive: {
    backgroundColor: "#fff",
    transition: { duration: 2 }
  }
};

export function Typograhpy({
  text,
  // except it to prevent forwardRef Error

  ...props
}) {
  return <P {...props}>{text}</P>;
}

Typograhpy.defaultProps = {
  text: "Type Text",
  type: "header-emphasized",
  lineType: "line-1",
  customColor: false,
  color: "#000000",
  align: "left",
  theme: "light"
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Typograhpy, {
  text: {
    type: ControlType.String
  },
  type: {
    type: ControlType.Enum,
    options: [
      "header-emphasized",
      "footnote-emphasized",
      "headline",
      "shelf-title",
      "caption",
      "label",
      "title-emphasized",
      "title",
      "nav-label",
      "header"
    ]
  },
  lineType: {
    type: ControlType.Enum,
    options: ["line-1", "line-2"]
  }
});
