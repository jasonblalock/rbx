import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/base";
import { ModifierProps } from "@/modifiers";
import { tuple } from "@/utils";

export const DELETE_SIZES = tuple("small", "medium", "large");
export type DeleteSizes = (typeof DELETE_SIZES)[number];

export type DeleteModifierProps = Partial<{
  className: string;
  size: DeleteSizes;
}>;

export type DeleteProps = ModifierProps & DeleteModifierProps;

export const Delete = forwardRefAs<DeleteProps, "a">(
  (props, ref) => {
    const { as, size, ...rest } = props;
    rest.className = cx("delete", rest.className, {
      [`is-${size}`]: size,
    });
    return React.createElement(as!, { ref, ...rest });
  },
  { as: "a" },
);