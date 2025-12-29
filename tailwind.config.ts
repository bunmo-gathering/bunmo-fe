// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        // semibold 600, medium 500, bold 700
        title1: {
          bold: [
            "72px",
            {
              lineHeight: "90px",
              fontWeight: "700",
              letterSpacing: "-0.25%",
            },
          ],
          medium: [
            "72px",
            {
              lineHeight: "90px",
              fontWeight: "500",
              letterSpacing: "-0.25%",
            },
          ],
        },

        title2: {
          bold: [
            "48px",
            {
              lineHeight: "60px",
              fontWeight: "700",
            },
          ],
          medium: [
            "48px",
            {
              lineHeight: "60px",
              fontWeight: "500",
            },
          ],
        },

        title3: {
          bold: [
            "30px",
            {
              lineHeight: "36px",
              fontWeight: "700",
            },
          ],
        },

        title4: {
          semibold: [
            "22px",
            {
              lineHeight: "36px",
              fontWeight: "600",
            },
          ],
        },

        title5: {
          bold: [
            "20px",
            {
              lineHeight: "24px",
              fontWeight: "700",
            },
          ],
        },

        body1: {
          bold: [
            "18px",
            {
              lineHeight: "24px",
              fontWeight: "700",
            },
          ],
          medium: [
            "18px",
            {
              lineHeight: "24px",
              fontWeight: "500",
            },
          ],
        },

        body2: {
          semibold: [
            "15px",
            {
              lineHeight: "20px",
              fontWeight: "600",
            },
          ],
          medium: [
            "15px",
            {
              lineHeight: "20px",
              fontWeight: "500",
            },
          ],
        },

        caption: {
          regular: [
            "12px",
            {
              lineHeight: "18px",
            },
          ],
          medium: [
            "12px",
            {
              lineHeight: "18px",
              fontWeight: "500",
            },
          ],
          semibold: [
            "12px",
            {
              lineHeight: "18px",
              fontWeight: "600",
            },
          ],
          bold: [
            "12px",
            {
              lineHeight: "18px",
              fontWeight: "700",
            },
          ],
        },
      },

      colors: {
        primary: "var(--primary)",
        surfaceTint: "var(--surfaceTint)",
        onPrimary: "var(--onPrimary)",
        primaryContainer: "var(--primaryContainer)",
        onPrimaryContainer: "var(--onPrimaryContainer)",
        secondary: "var(--secondary)",
        onSecondary: "var(--onSecondary)",
        secondaryContainer: "var(--secondaryContainer)",
        onSecondaryContainer: "var(--onSecondaryContainer)",
        tertiary: "var(--tertiary)",
        onTertiary: "var(--onTertiary)",
        tertiaryContainer: "var(--tertiaryContainer)",
        onTertiaryContainer: "var(--onTertiaryContainer)",
        error: "var(--error)",
        onError: "var(--onError)",
        errorContainer: "var(--errorContainer)",
        onErrorContainer: "var(--onErrorContainer)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        surface: "var(--surface)",
        onSurface: "var(--onSurface)",
        surfaceVariant: "var(--surfaceVariant)",
        onSurfaceVariant: "var(--onSurfaceVariant)",
        outline: "var(--outline)",
        outlineVariant: "var(--outlineVariant)",
        shadow: "var(--shadow)",
        scrim: "var(--scrim)",
        inverseSurface: "var(--inverseSurface)",
        inverseOnSurface: "var(--inverseOnSurface)",
        inversePrimary: "var(--inversePrimary)",
        primaryFixed: "var(--primaryFixed)",
        onPrimaryFixed: "var(--onPrimaryFixed)",
        primaryFixedDim: "var(--primaryFixedDim)",
        onPrimaryFixedVariant: "var(--onPrimaryFixedVariant)",
        secondaryFixed: "var(--secondaryFixed)",
        onSecondaryFixed: "var(--onSecondaryFixed)",
        secondaryFixedDim: "var(--secondaryFixedDim)",
        onSecondaryFixedVariant: "var(--onSecondaryFixedVariant)",
        tertiaryFixed: "var(--tertiaryFixed)",
        onTertiaryFixed: "var(--onTertiaryFixed)",
        tertiaryFixedDim: "var(--tertiaryFixedDim)",
        onTertiaryFixedVariant: "var(--onTertiaryFixedVariant)",
        surfaceDim: "var(--surfaceDim)",
        surfaceBright: "var(--surfaceBright)",
        surfaceContainerLowest: "var(--surfaceContainerLowest)",
        surfaceContainerLow: "var(--surfaceContainerLow)",
        surfaceContainer: "var(--surfaceContainer)",
        surfaceContainerHigh: "var(--surfaceContainerHigh)",
        surfaceContainerHighest: "var(--surfaceContainerHighest)",
      },
    },
  },
  plugins: [],
};

export default config;
