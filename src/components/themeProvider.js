import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { default as defaultTheme } from './theme';

export default function ThemeProvider({ children, theme = {}, location }) {
  return (
    <div>
      <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>{children}</EmotionThemeProvider>
    </div>
  );
}
