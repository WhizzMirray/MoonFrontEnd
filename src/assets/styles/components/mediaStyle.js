import { iconButton, paddingBottom,badge} from "../main.js";

const styles = theme => ({
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
  paddingBreakpoint: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw"
    }
  },
  commentTabPaddingBreakpoint: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "4vw",
    },
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
  expansionRoot:{
    boxShadow: "unset",
    "&:before" : {
      backgroundColor:"unset"
    },
    paddingBottom
  },
  commentSection:{
    padding: "0 24px 0 24px",
    paddingBottom
  },
  comments:{
    padding: "0 24px 0 24px",
    paddingBottom,
    [theme.breakpoints.down("xs")] : {
      padding : "0",
    }
  },
  comment:{
    padding: "0 0 0 48px",
    paddingBottom,
    [theme.breakpoints.down("xs")] : {
      padding : "0",
    }
  },
  commentForm:{
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    paddingBottom: "2em",
  },
  formControl:{
    marginLeft: "10px",
    width: "calc(90% - 27px)",
    marginRight: "auto"
  },
  adornmentSend: {
   height: "24px",
   width: "24px"   
  },
  input: {

  },
  marginComment:{
    paddingLeft: "2.5vw",
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
});

export default styles;
