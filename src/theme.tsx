import { extendTheme } from "@chakra-ui/react";
import { GlobalStyleProps } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
  fonts,
  styles: {
    global: ({ colorMode }: GlobalStyleProps) => ({
      "html, body": {
        bg: colorMode == "dark" ? "#23262D" : "white",
      },
    }),
  },
});

export default theme;
