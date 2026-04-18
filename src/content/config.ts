// ============================================
// SITE CONFIGURATION - Edit this file for all content
// ============================================

export const siteConfig = {
  name: "Philipp Scherer",
  title: "Product Manager & Problem Solver",
  description: "Berlin-based Product Manager combining user-centric discovery and AI-leveraged workflows.",
  
  // Dark/Light mode colors
  colors: {
    light: {
      background: "#f4f1ed",
      foreground: "#1a1a1a",
      muted: "#e8e4df",
      mutedForeground: "#6b6b6b",
      accent: "#7132CA",      // Purple
      accentForeground: "#ffffff",
      secondary: "#FA8112",  // Orange
      secondaryForeground: "#ffffff",
      border: "#d4d0ca",
      card: "#ffffff",
      cardForeground: "#1a1a1a",
    },
    dark: {
      background: "#0f0f0f",
      foreground: "#f4f1ed",
      muted: "#1a1a1a",
      mutedForeground: "#9a9a9a",
      accent: "#9b59d0",     // Lighter purple for dark mode
      accentForeground: "#ffffff",
      secondary: "#ff9a3d",  // Lighter orange for dark mode
      secondaryForeground: "#0f0f0f",
      border: "#2a2a2a",
      card: "#1a1a1a",
      cardForeground: "#f4f1ed",
    }
  }
};

export type ColorScheme = keyof typeof siteConfig.colors;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export const footerLinks = [
  { label: "GitHub", href: "https://github.com/Riuriurui" },
  { label: "LinkedIn", href: "https://linkedin.com/in/philippscherer" },
  { label: "Email", href: "mailto:phil@example.com" },
];

export const footer = {
  copyright: `© ${new Date().getFullYear()} Philipp Scherer. Built with care in Berlin.`,
};
