const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const iconButton = {
  width: "40px",
  height: "40px"
};
const paper = {
  boxShadow:
    "0 0px 2px 0 rgba(0, 0, 0, 0.15), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
  padding: "0.625rem 0.625rem",
  margin: "0px 40px 0px",
};
const paddingBottom = "0.85em";
const container = {
  ...conatinerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  },
};
const badge = {
  marginTop: "10px",
  marginRight: "10px"
};
export {
  drawerWidth,
  transition,
  conatinerFluid,
  container,
  paper,
  iconButton,
  paddingBottom,
  badge
};
