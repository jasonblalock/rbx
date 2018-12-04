import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/generic";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type FieldBodyProps = ModifierProps;

export const FieldBody = forwardRefAs<FieldBodyProps, "div">((props, ref) => {
  const { as, ...rest } = transformModifiers(props);
  rest.className = cx("field-body", rest.className);
  return React.createElement(as!, { ref, ...rest });
}, "div");
