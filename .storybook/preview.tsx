import React from "react";

import { DecoratorFn } from "@storybook/react";

import GlobalStyle from "../src/styles/GlobalStyles";
import GlobalStyles from "../src/styles/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const withTheme: DecoratorFn = (StoryFn, context) => {
  return (
    <>
      <GlobalStyles />
      <StoryFn />
    </>
  );
};

export const decorators = [withTheme];
