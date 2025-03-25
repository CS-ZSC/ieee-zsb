import { defineConfig, createSystem, SystemConfig } from '@chakra-ui/react'

const defaultConfig = {}

const config: SystemConfig = defineConfig({
  colors: {
    light: {
      bg: "#f9fdff",
      fg: "#e0f2fa",
      primary: "#00669c",
      secondary: "#ffc000",

      // Button colors
      btnBg1: "#004164",
      btnText1: "#e0f2fa",
      btnBg2: "#a0d4eb",
      btnText2: "#00669c",
      btnBg3: "#e0f2fa",
      btnText3: "#005481",

      // Card colors
      cardBg1: "#00669c",
      cardBorder1: "#1187c9",
      cardBg2: "rgba(6, 62, 91, 0.8)",
      cardBorder2: "#004b75",

      // Chip colors
      chipBg1: "#ffc100",
      chipBorder1: "#664f00",
      chipBg2: "#a0d4eb",
      chipBorder2: "#00669c",

      // Semantic color scales
      brand: {
        50: "#e6f2ff",
        100: "#a0d4eb",
        200: "#1187c9",
        300: "#00669c",
        400: "#004b75",
        500: "#00669c",
        600: "#004164",
        700: "#003a5a",
        800: "#002235",
        900: "#00101a",
        950: "#000000"
      },

      // Status colors
      cs1: "#354a5f",
      cs2: "#d3d6db",
      ras1: "#f08114",
      ras2: "#f8e2cb",
      pes1: "#6eb43f",
      pes2: "#e1ead5",
      wie1: "#802c92",
      wie2: "#e2d1e4"
    },
    dark: {
      bg: "#00101a",
      fg: "#e0f2fa",
      primary: "#00669c",
      secondary: "#ffc000",

      // Button colors
      btnBg1: "#00669c",
      btnText1: "#e0f2fa",
      btnBg2: "#a0d4eb",
      btnText2: "#00669c",
      btnBg3: "#e0f2fa",
      btnText3: "#005481",

      // Card colors
      cardBg1: "#002235",
      cardBorder1: "#003a5a",
      cardBg2: "rgba(0, 102, 156, 0.8)",
      cardBorder2: "#0076b8",

      // Chip colors
      chipBg1: "#ffc100",
      chipBorder1: "#664f00",
      chipBg2: "#a0d4eb",
      chipBorder2: "#00669c",

      // Semantic color scales
      brand: {
        50: "#e6f2ff",
        100: "#a0d4eb",
        200: "#1187c9",
        300: "#00669c",
        400: "#004b75",
        500: "#00669c",
        600: "#004164",
        700: "#003a5a",
        800: "#002235",
        900: "#00101a",
        950: "#000000"
      },

      // Status colors
      cs1: "#354a5f",
      cs2: "#d3d6db",
      ras1: "#f08114",
      ras2: "#f8e2cb",
      pes1: "#6eb43f",
      pes2: "#e1ead5",
      wie1: "#802c92",
      wie2: "#e2d1e4"
    }
  },
  semanticTokens: {
    colors: {
      // Light mode semantic tokens
      "light.brand.solid": { value: "{colors.light.brand.500}" },
      "light.brand.contrast": { value: "{colors.light.brand.100}" },
      "light.brand.fg": { value: "{colors.light.brand.700}" },
      "light.brand.muted": { value: "{colors.light.brand.100}" },
      "light.brand.subtle": { value: "{colors.light.brand.200}" },
      "light.brand.emphasized": { value: "{colors.light.brand.300}" },
      "light.brand.focusRing": { value: "{colors.light.brand.500}" },

      // Dark mode semantic tokens
      "dark.brand.solid": { value: "{colors.dark.brand.500}" },
      "dark.brand.contrast": { value: "{colors.dark.brand.100}" },
      "dark.brand.fg": { value: "{colors.dark.brand.700}" },
      "dark.brand.muted": { value: "{colors.dark.brand.100}" },
      "dark.brand.subtle": { value: "{colors.dark.brand.200}" },
      "dark.brand.emphasized": { value: "{colors.dark.brand.300}" },
      "dark.brand.focusRing": { value: "{colors.dark.brand.500}" }
    }
  },
  styles: {
    global: {
      body: {
        bg: "light.bg",
        color: "light.text-2"
      }
    }
  }
})

export const system = createSystem(defaultConfig, config)
