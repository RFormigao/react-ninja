"use strict";

import React from "react";
import { Counter } from "./index";
import { storiesOf, action } from "@storybook/react";

const stories = storiesOf("Counter", module);

stories.add("Counter", () => (
  <Counter
    counter={1}
    increment={action("increment")}
    decrement={action("decrement")}
  />
));
