import { cx } from "emotion";
import React from "react";

import { Element } from "@/components/element";
import { renderAsExoticComponent } from "@/components/render-as-exotic-component";
import { ModifierProps } from "@/modifiers";
import { PanelTabsTab } from "./panel-tabs-tab";

export type PanelTabsProps = ModifierProps;

export const PanelTabs = Object.assign(
  renderAsExoticComponent<PanelTabsProps, "div">(
    ({ className, ...props }, ref) => (
      <Element {...props} ref={ref} className={cx("panel-tabs", className)} />
    ),
    "div",
  ),
  { Tab: PanelTabsTab },
);