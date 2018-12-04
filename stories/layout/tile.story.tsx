import { storiesOf } from "@storybook/react";
import React from "react";

import { Box, Content, Image, Title } from "@/elements";
import { Section, Tile } from "@/layout";

storiesOf("Layout/Tile", module)
  .add("Default", () => (
    <Section>
      <Tile kind="ancestor">
        <Tile size={8} vertical>
          <Tile>
            <Tile kind="parent" vertical>
              <Tile<"article">
                as="article"
                kind="child"
                notification
                color="primary"
              >
                <Title>Vertical...</Title>
                <Title subtitle>Top tile</Title>
              </Tile>
              <Tile<"article">
                as="article"
                kind="child"
                notification
                color="warning"
              >
                <Title>Tiles...</Title>
                <Title subtitle>Bottom Tile...</Title>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile<"article">
                as="article"
                kind="child"
                notification
                color="info"
              >
                <Title>Middle Tile...</Title>
                <Title subtitle>With an image</Title>
                <Image
                  size="4by3"
                  src="http://bulma.io/images/placeholders/640x480.png"
                />
              </Tile>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile<"article">
              as="article"
              kind="child"
              notification
              color="danger"
            >
              <Title>Wide tile</Title>
              <Title subtitle>Aligned with the right tile</Title>
              <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </Content>
            </Tile>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile<"article">
            as="article"
            kind="child"
            notification
            color="success"
          >
            <Content>
              <Title>Tall tile</Title>
              <Title subtitle>With even more content</Title>
              <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  semper diam at erat pulvinar, at pulvinar felis blandit.
                  Vestibulum volutpat tellus diam, consequat gravida libero
                  rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend,
                  nunc dui porta orci, quis semper odio felis ut quam.
                </p>
                <p>
                  Suspendisse varius ligula in molestie lacinia. Maecenas varius
                  eget ligula a sagittis. Pellentesque interdum, nisl nec
                  interdum maximus, augue diam porttitor lorem, et sollicitudin
                  felis neque sit amet erat. Maecenas imperdiet felis nisi,
                  fringilla luctus felis hendrerit sit amet. Aenean vitae
                  gravida diam, finibus dignissim turpis. Sed eget varius
                  ligula, at volutpat tortor.
                </p>
                <p>
                  Integer sollicitudin, tortor a mattis commodo, velit urna
                  rhoncus erat, vitae congue lectus dolor consequat libero.
                  Donec leo ligula, maximus et pellentesque sed, gravida a
                  metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                  lacus, quis faucibus libero. Quisque non semper leo.
                </p>
              </Content>
            </Content>
          </Tile>
        </Tile>
      </Tile>
    </Section>
  ))
  .add("3 columns", () => (
    <Section>
      <Tile kind="ancestor">
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Hello world</Title>
            <Title<"p"> as="p" subtitle>
              What is up?
            </Title>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Foo</Title>
            <Title<"p"> as="p" subtitle>
              Bar
            </Title>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Third column</Title>
            <Title<"p"> as="p" subtitle>
              With some content
            </Title>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </Content>
          </Tile>
        </Tile>
      </Tile>
      <Tile kind="ancestor">
        <Tile vertical size={8}>
          <Tile>
            <Tile kind="parent" vertical>
              <Tile<typeof Box> as={Box} kind="child">
                <Title<"p"> as="p">Vertical titles</Title>
                <Title<"p"> as="p" subtitle>
                  Top box
                </Title>
              </Tile>
              <Tile<typeof Box> as={Box} kind="child">
                <Title<"p"> as="p">Vertical titles</Title>
                <Title<"p"> as="p" subtitle>
                  Bottom box
                </Title>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile<typeof Box> as={Box} kind="child">
                <Title<"p"> as="p">Middle box</Title>
                <Title<"p"> as="p" subtitle>
                  With an image
                </Title>
                <Image
                  size="4by3"
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </Tile>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile<typeof Box> as={Box} kind="child">
              <Title<"p"> as="p">Wide column</Title>
              <Title<"p"> as="p" subtitle>
                Aligned with the right column
              </Title>
              <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </Content>
            </Tile>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Content>
              <Title<"p"> as="p">Tall column</Title>
              <Title<"p"> as="p" subtitle>
                With even more content
              </Title>
              <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  semper diam at erat pulvinar, at pulvinar felis blandit.
                  Vestibulum volutpat tellus diam, consequat gravida libero
                  rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend,
                  nunc dui porta orci, quis semper odio felis ut quam.
                </p>
                <p>
                  Suspendisse varius ligula in molestie lacinia. Maecenas varius
                  eget ligula a sagittis. Pellentesque interdum, nisl nec
                  interdum maximus, augue diam porttitor lorem, et sollicitudin
                  felis neque sit amet erat. Maecenas imperdiet felis nisi,
                  fringilla luctus felis hendrerit sit amet. Aenean vitae
                  gravida diam, finibus dignissim turpis. Sed eget varius
                  ligula, at volutpat tortor.
                </p>
                <p>
                  Integer sollicitudin, tortor a mattis commodo, velit urna
                  rhoncus erat, vitae congue lectus dolor consequat libero.
                  Donec leo ligula, maximus et pellentesque sed, gravida a
                  metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                  lacus, quis faucibus libero. Quisque non semper leo.
                </p>
              </Content>
            </Content>
          </Tile>
        </Tile>
      </Tile>
      <Tile kind="ancestor">
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Side column</Title>
            <Title<"p"> as="p" subtitle>
              With some content
            </Title>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </Content>
          </Tile>
        </Tile>
        <Tile kind="parent" size={8}>
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Main column</Title>
            <Title<"p"> as="p" subtitle>
              With some content
            </Title>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </Content>
          </Tile>
        </Tile>
      </Tile>
    </Section>
  ))
  .add("4 columns", () => (
    <Section>
      <Tile kind="ancestor">
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">One</Title>
            <Title<"p"> as="p" subtitle>
              Subtitle
            </Title>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Two</Title>
            <Title<"p"> as="p" subtitle>
              Subtitle
            </Title>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Three</Title>
            <Title<"p"> as="p" subtitle>
              Subtitle
            </Title>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Four</Title>
            <Title<"p"> as="p" subtitle>
              Subtitle
            </Title>
          </Tile>
        </Tile>
      </Tile>

      <Tile kind="ancestor">
        <Tile vertical size={9}>
          <Tile>
            <Tile kind="parent">
              <Tile<typeof Box> as={Box} kind="child">
                <Title<"p"> as="p">Five</Title>
                <Title<"p"> as="p" subtitle>
                  Subtitle
                </Title>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis
                    blandit. Vestibulum volutpat tellus diam, consequat gravida
                    libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                    eleifend, nunc dui porta orci, quis semper odio felis ut
                    quam.
                  </p>
                </Content>
              </Tile>
            </Tile>
            <Tile vertical size={8}>
              <Tile>
                <Tile kind="parent">
                  <Tile<typeof Box> as={Box} kind="child">
                    <Title<"p"> as="p">Six</Title>
                    <Title<"p"> as="p" subtitle>
                      Subtitle
                    </Title>
                  </Tile>
                </Tile>
                <Tile kind="parent">
                  <Tile<typeof Box> as={Box} kind="child">
                    <Title<"p"> as="p">Seven</Title>
                    <Title<"p"> as="p" subtitle>
                      Subtitle
                    </Title>
                  </Tile>
                </Tile>
              </Tile>
              <Tile kind="parent">
                <Tile<typeof Box> as={Box} kind="child">
                  <Title<"p"> as="p">Eight</Title>
                  <Title<"p"> as="p" subtitle>
                    Subtitle
                  </Title>
                </Tile>
              </Tile>
            </Tile>
          </Tile>
          <Tile>
            <Tile kind="parent" size={8}>
              <Tile<typeof Box> as={Box} kind="child">
                <Title<"p"> as="p">Nine</Title>
                <Title<"p"> as="p" subtitle>
                  Subtitle
                </Title>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </Content>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile<typeof Box> as={Box} kind="child">
                <Title<"p"> as="p">Ten</Title>
                <Title<"p"> as="p" subtitle>
                  Subtitle
                </Title>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </Content>
              </Tile>
            </Tile>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Content>
              <Title<"p"> as="p">Eleven</Title>
              <Title<"p"> as="p" subtitle>
                Subtitle
              </Title>
              <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  semper diam at erat pulvinar, at pulvinar felis blandit.
                  Vestibulum volutpat tellus diam, consequat gravida libero
                  rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend,
                  nunc dui porta orci, quis semper odio felis ut quam.
                </p>
                <p>
                  Integer sollicitudin, tortor a mattis commodo, velit urna
                  rhoncus erat, vitae congue lectus dolor consequat libero.
                  Donec leo ligula, maximus et pellentesque sed, gravida a
                  metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                  lacus, quis faucibus libero. Quisque non semper leo.
                </p>
              </Content>
            </Content>
          </Tile>
        </Tile>
      </Tile>

      <Tile kind="ancestor">
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Twelve</Title>
            <Title<"p"> as="p" subtitle>
              Subtitle
            </Title>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
              </p>
            </Content>
          </Tile>
        </Tile>
        <Tile kind="parent" size={6}>
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Thirteen</Title>
            <Title<"p"> as="p" subtitle>
              Subtitle
            </Title>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </Content>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile<typeof Box> as={Box} kind="child">
            <Title<"p"> as="p">Fourteen</Title>
            <Title<"p"> as="p" subtitle>
              Subtitle
            </Title>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
              </p>
            </Content>
          </Tile>
        </Tile>
      </Tile>
    </Section>
  ));
