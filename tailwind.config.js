module.exports = {
  purge: ["./src/**/*.md", "./src/**/*.html", "./src/**/*.njk"],
  theme: {
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
