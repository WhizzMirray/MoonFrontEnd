const headerLinksStyle = theme => ({
  list: {
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
    zIndex: 2000
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px"
      }
    }
  },
  flexInline: {
    display: "inline-flex",
  },
  flexInlineSmDown: {
    [theme.breakpoints.down("sm")] : {
      display: "unset"
    }
  },
  flexInlineXsDown: {
    [theme.breakpoints.down("xs")] : {
      display: "unset"
    }
  },
  avatar: {
    marginLeft: "20px"
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

export default headerLinksStyle;
