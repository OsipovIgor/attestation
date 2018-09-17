import { createMuiTheme } from "material-ui/styles";

// переопределение темы Material-UI
const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0071d4",
      light: "#6ba6da",
      dark: "#3599F0",
    },
    secondary: {
      main: "#6ba6da",
      light: "#0071d4",
      dark: "#6ba6da",
    },
  },
});

export default muiTheme;