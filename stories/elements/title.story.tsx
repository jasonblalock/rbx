import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Title } from "@/elements";
import { TITLE_SIZES } from "@/elements/title/title";

import { Section } from "@/layout";
import { iterableToSelectObject } from "../helpers";

export const knobs = {
  size: (title: string = "Size") =>
    select(title, iterableToSelectObject(TITLE_SIZES, { undefined: "" }), ""),
  spaced: (title: string = "Spaced") => boolean(title, false),
};

storiesOf("Elements/Title", module)
  .addDecorator(story => <Section children={story()} />)
  .add("Default", () => {
    const titleSize = knobs.size("Title size");
    const subtitleSize = knobs.size("Subtitle size");
    const spaced = knobs.spaced();

    return (
      <div>
        <Title size={titleSize || undefined} spaced={spaced}>
          Title
        </Title>
        <Title<"h2"> as="h2" size={subtitleSize || undefined} subtitle>
          Subtitle
        </Title>
      </div>
    );
  });
