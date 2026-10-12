/** @type {import('tailwindcss').Config} */
const tailwindPreset = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary": "#4cd7f6",
        "primary": "#d0bcff",
        "on-tertiary-fixed": "#21005e",
        "surface-container-low": "#171b26",
        "surface-tint": "#d0bcff",
        "on-secondary": "#003640",
        "inverse-surface": "#dfe2f1",
        "surface": "#0f131d",
        "background": "#0f131d",
        "on-primary-fixed-variant": "#5516be",
        "on-primary": "#3c0091",
        "tertiary-container": "#9b7fed",
        "surface-dim": "#0f131d",
        "on-primary-fixed": "#23005c",
        "surface-container-high": "#262a35",
        "on-tertiary-container": "#31057e",
        "surface-container": "#1c1f2a",
        "on-tertiary": "#381385",
        "surface-container-highest": "#313540",
        "outline-variant": "#494454",
        "inverse-on-surface": "#2c303b",
        "error": "#ffb4ab",
        "surface-container-lowest": "#0a0e18",
        "error-container": "#93000a",
        "tertiary": "#cebdff",
        "on-secondary-container": "#00424e",
        "tertiary-fixed-dim": "#cebdff",
        "on-background": "#dfe2f1",
        "surface-variant": "#313540",
        "outline": "#958ea0",
        "on-error-container": "#ffdad6",
        "on-error": "#690005",
        "secondary-container": "#03b5d3",
        "primary-container": "#a078ff",
        "primary-fixed-dim": "#d0bcff",
        "on-tertiary-fixed-variant": "#4f319c",
        "on-secondary-fixed": "#001f26",
        "on-secondary-fixed-variant": "#004e5c",
        "on-surface-variant": "#cbc3d7",
        "on-primary-container": "#340080",
        "on-surface": "#dfe2f1",
        "secondary-fixed-dim": "#4cd7f6",
        "primary-fixed": "#e9ddff",
        "surface-bright": "#353944",
        "tertiary-fixed": "#e8ddff",
        "secondary-fixed": "#acedff",
        "inverse-primary": "#6d3bd7"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "space-sm": "0.5rem",
        "margin": "3rem",
        "space-md": "1rem",
        "space-xs": "0.25rem",
        "space-lg": "1.5rem",
        "margin-mobile": "1.25rem",
        "gutter-mobile": "1rem",
        "space-xl": "2.5rem",
        "gutter": "1.5rem"
      },
      fontFamily: {
        "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-xl-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-xl": ["Plus Jakarta Sans", "sans-serif"],
        "label-lg": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "headline-md": ["28px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-xl-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.025em", fontWeight: "800" }],
        "body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "400" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.04em", fontWeight: "700" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.025em", fontWeight: "700" }],
        "body-md": ["15px", { lineHeight: "24px", letterSpacing: "-0.005em", fontWeight: "400" }],
        "headline-xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }]
      }
    }
  }
};

export default tailwindPreset;
