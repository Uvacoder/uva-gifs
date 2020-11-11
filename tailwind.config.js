module.exports = {
  purge: ["./src/**/*.md", "./src/**/*.html", "./src/**/*.njk"],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "875px",
      },
    },
  },
  variants: {
    textDecoration: ["hover", "group-hover"],
  },
  plugins: [],
};
