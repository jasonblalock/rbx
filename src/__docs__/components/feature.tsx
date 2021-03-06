import { Link } from "docz";
import React from "react";

import { Variables } from "src/base/helpers/variables";
import { Control, Field, Tag } from "src/elements";

export type FeatureGroupProps = {
  children: React.ReactNode;
};

export const FeatureGroup: React.FC<FeatureGroupProps> = ({ children }) => (
  <Field kind="group" children={children} />
);

export type FeatureProps = {
  primaryName: string;
  primaryColor: Variables["colors"];
  secondaryName: string;
  secondaryColor: Variables["colors"];
  url?: string;
};

export const Feature = Object.assign(
  ({
    primaryName,
    primaryColor,
    secondaryName,
    secondaryColor,
    url,
  }: FeatureProps) => {
    const tagGroupProps =
      url === undefined
        ? {}
        : /^\/[a-z]/.test(url) // Local path, e.g. '/somewhere'
        ? { as: Link, to: url }
        : {
            as: "a" as keyof JSX.IntrinsicElements,
            href: url,
            target: "_blank",
          };

    return (
      <Control>
        <Tag.Group gapless {...tagGroupProps}>
          <Tag color={primaryColor}>{primaryName}</Tag>
          <Tag color={secondaryColor}>{secondaryName}</Tag>
        </Tag.Group>
      </Control>
    );
  },
  { Group: FeatureGroup },
);

export type AsDocProps = {
  asType: string;
};

export const AsDoc: React.FC<AsDocProps> = ({ asType }) => (
  <Feature
    primaryName="as"
    primaryColor="light"
    secondaryName={asType}
    secondaryColor="warning"
    url="/architecture/inversion-of-control"
  />
);

export type DocFeatureProps = {
  docPath?: string;
};

export const DocFeature: React.FC<DocFeatureProps> = ({ docPath }) => {
  const url =
    docPath !== undefined
      ? `https://bulma.io/documentation${docPath}`
      : undefined;
  const secondaryName = docPath !== undefined ? "Bulma" : "n/a";
  const secondaryColor = docPath !== undefined ? "primary" : "dark";

  return (
    <Feature
      primaryName="docs"
      primaryColor="light"
      secondaryName={secondaryName}
      secondaryColor={secondaryColor}
      url={url}
    />
  );
};

export type CustomizeFeatureProps = {
  customize?: boolean;
};

export const CustomizeFeature: React.FC<CustomizeFeatureProps> = ({
  customize,
}) => {
  const name = customize === true ? "yes" : "no";
  const color = customize === true ? "success" : "danger";

  return (
    <Feature
      primaryName="customize"
      primaryColor="light"
      secondaryName={name}
      secondaryColor={color}
      url="/architecture/customize"
    />
  );
};

export type ComponentFeaturesProps = AsDocProps &
  DocFeatureProps &
  CustomizeFeatureProps;

export const ComponentFeatures: React.FC<ComponentFeaturesProps> = ({
  asType,
  docPath,
  customize,
}) => (
  <Feature.Group>
    <AsDoc asType={asType} />
    <CustomizeFeature customize={customize} />
    <DocFeature docPath={docPath} />
  </Feature.Group>
);
