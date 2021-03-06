import React from "react";

import {
  BUTTON_GROUP_DEFAULTS,
  ButtonGroup,
} from "src/elements/button/button-group";

import {
  hasProperties,
  makeGenericHOCShallowWrapperInContextConsumer,
  testForwardRefAsExoticComponentIntegration,
  testThemeIntegration,
  validateBoolPropType,
  validateStringOrNumberPropType,
} from "src/__tests__/testing";

const COMPONENT = ButtonGroup;
const DISPLAY_NAME = "Button.Group";
const DEFAULT_ELEMENT = "div";
const BULMA_CLASS_NAME = "buttons";

describe(`${DISPLAY_NAME} component`, () => {
  hasProperties(COMPONENT, {
    defaultProps: { as: DEFAULT_ELEMENT },
  });

  testForwardRefAsExoticComponentIntegration(COMPONENT, {
    displayName: DISPLAY_NAME,
    bulmaClassName: BULMA_CLASS_NAME,
    defaultElement: DEFAULT_ELEMENT,
  });

  testThemeIntegration(COMPONENT);

  describe("props", () => {
    const { propTypes } = COMPONENT;

    describe("hasAddons", () => {
      validateBoolPropType(propTypes, "hasAddons");

      [false, true].map(hasAddons => {
        it(`should ${hasAddons ? "" : "not "}have addons`, () => {
          const node = <ButtonGroup hasAddons={hasAddons} />;
          const wrapper = makeGenericHOCShallowWrapperInContextConsumer(node);
          expect(wrapper.hasClass("has-addons")).toBe(hasAddons);
        });
      });
    });

    describe("align", () => {
      validateStringOrNumberPropType(propTypes, "align");

      BUTTON_GROUP_DEFAULTS.alignments.map(align => {
        it(`should be ${align}`, () => {
          const node = <ButtonGroup align={align} />;
          const wrapper = makeGenericHOCShallowWrapperInContextConsumer(node);
          expect(wrapper.hasClass(`is-${align}`)).toBe(true);
        });
      });
    });
  });
});
