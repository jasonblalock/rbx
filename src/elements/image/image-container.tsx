import classNames from "classnames";
import React from "react";

import { forwardRefAs, HelpersProps, transformHelpers } from "../../base";
import { tuple } from "../../utils";

export const IMAGE_CONTAINER_SIZES = tuple(
  16,
  24,
  32,
  48,
  64,
  96,
  128,
  "16by9",
  "1by1",
  "1by2",
  "1by3",
  "2by1",
  "2by3",
  "3by1",
  "3by2",
  "3by4",
  "3by5",
  "4by3",
  "4by5",
  "5by3",
  "5by4",
  "9by16",
  "square",
);

export type ImageContainerSizes = (typeof IMAGE_CONTAINER_SIZES)[number];

export type ImageContainerModifierProps = Partial<{
  className: string;
  size: ImageContainerSizes;
}>;

export type ImageContainerProps = HelpersProps & ImageContainerModifierProps;

export const ImageContainer = forwardRefAs<ImageContainerProps, "figure">(
  (props, ref) => {
    const { as, size, ...rest } = transformHelpers(props);
    let s: string | undefined;
    if (typeof size === "string") {
      s = size;
    } else if (typeof size === "number") {
      s = `${size}x${size}`;
    }
    rest.className = classNames("image", rest.className, {
      [`is-${s}`]: s,
    });

    return React.createElement(as!, { ref, ...rest });
  },
  { as: "figure" },
);
