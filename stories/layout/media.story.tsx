import { faHeart, faReply, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Button, Content, Delete, Icon, Image } from "@/elements";
import { Checkbox, Control, Field, Textarea } from "@/form";
import { Level, Media, Section } from "@/layout";

storiesOf("Layout/Media", module)
  .addDecorator(story => <Section children={story()} />)
  .add("Default", () => (
    <Media>
      <Media.Item<"figure"> as="figure" position="left">
        <Image<"p">
          as="p"
          size={64}
          alt="64x64"
          src="http://bulma.io/images/placeholders/128x128.png"
        />
      </Media.Item>
      <Media.Item position="content">
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small>{" "}
            <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Content>
        <Level breakpoint="mobile">
          <Level.Side align="left">
            <Level.Item<"a"> as="a">
              <Icon size="small">
                <FontAwesomeIcon icon={faReply} />
              </Icon>
            </Level.Item>
            <Level.Item<"a"> as="a">
              <Icon size="small">
                <FontAwesomeIcon icon={faRetweet} />
              </Icon>
            </Level.Item>
            <Level.Item<"a"> as="a">
              <Icon size="small">
                <FontAwesomeIcon icon={faHeart} />
              </Icon>
            </Level.Item>
          </Level.Side>
        </Level>
      </Media.Item>
      <Media.Item position="right">
        <Delete />
      </Media.Item>
    </Media>
  ))
  .add("Input", () => (
    <Media>
      <Media.Item<"figure"> as="figure" position="left">
        <Image<"p">
          as="p"
          size={64}
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      </Media.Item>
      <Media.Item position="content">
        <Field>
          <Control>
            <Textarea placeholder="Add a comment..." />
          </Control>
        </Field>
        <Level>
          <Level.Side align="left">
            <Level.Item>
              <Button color="info" submit>
                Submit
              </Button>
            </Level.Item>
          </Level.Side>
          <Level.Side align="right">
            <Level.Item>
              <Checkbox>Press enter to submit</Checkbox>
            </Level.Item>
          </Level.Side>
        </Level>
      </Media.Item>
    </Media>
  ))
  .add("Nesting", () => (
    <React.Fragment>
      <Media<"article"> as="article">
        <Media.Item position="left">
          <Image<"p">
            src="http://bulma.io/images/placeholders/128x128.png"
            size={64}
            as="p"
          />
        </Media.Item>
        <Media.Item position="content">
          <Content>
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus
              turpis.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 3 hrs
              </small>
            </p>
          </Content>

          <Media>
            <Media.Item position="left">
              <Image<"p">
                src="http://bulma.io/images/placeholders/128x128.png"
                size={48}
                as="p"
              />
            </Media.Item>
            <Media.Item position="content">
              <Content>
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam blandit nisl a
                  nulla sagittis, a lobortis leo feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>

              <Media>
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
                lorem cursus ullamcorper sit amet nec massa.
              </Media>

              <Media>
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
                tincidunt iaculis diam non, porta aliquet tortor.
              </Media>
            </Media.Item>
          </Media>

          <Media>
            <Media.Item position="left">
              <Image<"p">
                src="http://bulma.io/images/placeholders/96x96.png"
                size={48}
                as="p"
              />
            </Media.Item>
            <Media.Item position="content">
              <Content>
                <p>
                  <strong>Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis
                  vel. Maecenas varius felis sit amet magna vestibulum euismod
                  malesuada cursus libero. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae;
                  Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>
            </Media.Item>
          </Media>
        </Media.Item>
      </Media>
      <Media<"article"> as="article">
        <Media.Item position="left">
          <Image<"p">
            src="http://bulma.io/images/placeholders/128x128.png"
            size={64}
            as="p"
          />
        </Media.Item>
        <Media.Item position="content">
          <Field>
            <Control<"p"> as="p">
              <Textarea placeholder="Add a comment..." />
            </Control>
          </Field>
          <Field>
            <Control<"p"> as="p">
              <Button>Post comment</Button>
            </Control>
          </Field>
        </Media.Item>
      </Media>
    </React.Fragment>
  ));
