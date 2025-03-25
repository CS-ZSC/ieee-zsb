import { defineConfig, createSystem, SystemConfig, defaultConfig } from '@chakra-ui/react'


const config: SystemConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Brand color scales with mode-specific values
        brand: {
          "50": { value: { _light: "#e6f2ff", _dark: "#e6f2ff" } },
          "100": { value: { _light: "#a0d4eb", _dark: "#a0d4eb" } },
          "200": { value: { _light: "#1187c9", _dark: "#1187c9" } },
          "500": { value: { _light: "#00669c", _dark: "#00669c" } },
          "900": { value: { _light: "#00101a", _dark: "#00101a" } }
        },
      },
    },
    semanticTokens: {
      colors: {
        // Background colors
        "background": {
          "primary": { value: { _light: "#f9fdff", _dark: "#00101a" } },
          "secondary": { value: { _light: "#e0f2fa", _dark: "#e0f2fa" } }
        },

        // Button colors
        "button": {
          "bg-primary": { value: { _light: "#004164", _dark: "#00669c" } },
          "text-primary": { value: { _light: "#e0f2fa", _dark: "#e0f2fa" } },
          "bg-secondary": { value: { _light: "#a0d4eb", _dark: "#a0d4eb" } },
          "text-secondary": { value: { _light: "#00669c", _dark: "#00669c" } }
        },

        // Card colors
        "card": {
          "bg": {

            "primary": { value: { _light: "#00669c", _dark: "#002235" } },
            "secondary": { value: { _light: "rgba(6, 62, 91, 0.8)", _dark: "rgba(0, 102, 156, 0.8)" } }
          },
          "border.primary": { value: { _light: "#1187c9", _dark: "#003a5a" } },
        },

        // Chip colors
        "chip": {
          "bg.primary": { value: { _light: "#ffc100", _dark: "#ffc100" } },
          "border.primary": { value: { _light: "#664f00", _dark: "#664f00" } }
        },

        // Status colors
        "status": {
          "neutral.primary": { value: { _light: "#354a5f", _dark: "#354a5f" } },
          "neutral.secondary": { value: { _light: "#d3d6db", _dark: "#d3d6db" } },
          "alert.primary": { value: { _light: "#f08114", _dark: "#f08114" } },
          "alert.secondary": { value: { _light: "#f8e2cb", _dark: "#f8e2cb" } },
          "success.primary": { value: { _light: "#6eb43f", _dark: "#6eb43f" } },
          "success.secondary": { value: { _light: "#e1ead5", _dark: "#e1ead5" } },
          "highlight.primary": { value: { _light: "#802c92", _dark: "#802c92" } },
          "highlight.secondary": { value: { _light: "#e2d1e4", _dark: "#e2d1e4" } }
        },
      }
    },

  }
})

export const system = createSystem(defaultConfig, config);