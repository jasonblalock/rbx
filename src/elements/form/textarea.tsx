import classNames from "classnames";
import React from "react";

import { forwardRefAs, HelpersProps, transformHelpers } from "../../base";
import { Colors } from "../../base/helpers";
import { tuple } from "../../utils";

export const TEXTAREA_SIZES = tuple("small", "medium", "large");
export type TextareaSizes = (typeof TEXTAREA_SIZES)[number];

export const TEXTAREA_STATES = tuple("focused", "hovered");
export type TextareaStates = (typeof TEXTAREA_STATES)[number];

export type TextareaModifierProps = Partial<{
  className: string;
  color: Colors;
  fixedSize: boolean;
  size: TextareaSizes;
  state: TextareaStates;
}>;

export type TextareaProps = HelpersProps & TextareaModifierProps;

export const Textarea = forwardRefAs<TextareaProps, "textarea">(
  (props, ref) => {
    const { as, color, fixedSize, size, state, ...rest } = transformHelpers(
      props,
    );
    rest.className = classNames("textarea", rest.className, {
      "has-fixed-size": fixedSize,
      [`is-${color}`]: color,
      [`is-${size}`]: size,
      [`is-${state}`]: state,
    });
    return React.createElement(as!, { ref, ...rest });
  },
  {
    as: "textarea",
    rows: 4,
  },
);
