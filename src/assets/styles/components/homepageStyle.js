import { iconButton, paddingBottom,badge} from "../main.js";

const styles = theme => ({
  mainDiv : {
    [theme.breakpoints.down("sm")]: {
      margin: "0px 10px 0px"
    },
  },
  header: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  horFlex: {
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    paddingBottom
  },
  iconButton,
  usernameText: {
    marginTop: "4px",
    marginLeft: "10px",
    marginRight: "auto"
  },
  favoriteText: {
    marginTop: "10px",
    marginRight: "10px"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  mediaCard : {
    maxWidth: "450px",
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
});

export default styles;
