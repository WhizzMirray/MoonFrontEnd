import React from "react";
import classNames from "classnames";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Image from "../components/Image.jsx";

import Content from "../components/Content.jsx";
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/styles/components/homepageStyle.js";

import img from "assets/img/test1.jpg";

const media = {
  title: "A very very very long title",
  author: "Whizzmirray",
  date: "Fri, 25 may 2018",
  favourites: 54,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSuspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  tags: ["House", "Nice", "Atmospheric"]
};
class Homepage extends React.Component {
  render() {
    const { classes } = this.props;
    const topBarClasses = classNames({
      [classes.horFlex]: true,
      [classes.justifyCenter]: true
    });
    const descBarClasses = classNames({
      [classes.horFlex]: true
    });
    return (
      <div className={classes.mainDiv}>
        <Content mediaCard>
          <div className={topBarClasses}>
            <Typography
              className={classes.header}
              variant="subheading"
              align="center"
            >
              {media.title}
            </Typography>
          </div>
          <Image src={img} />
          <div className={descBarClasses}>
            <Avatar>{media.author[0]}</Avatar>
            <Typography className={classes.usernameText} variant="body1">
              {media.author}
              <Typography variant="caption">{media.date}</Typography>
            </Typography>
            <Typography className={classes.favoriteText} variant="body1">
              {media.favourites}
            </Typography>
            <IconButton className={classes.iconButton} aria-label="Favorite">
              <FavoriteIcon />
            </IconButton>
            <IconButton className={classes.iconButton} aria-label="Share">
              <ShareIcon />
            </IconButton>
          </div>
        </Content>
        <Content mediaCard>
          <div className={topBarClasses}>
            <Typography
              className={classes.header}
              variant="subheading"
              align="center"
            >
              {media.title}
            </Typography>
          </div>
          <Image src={img} />
          <div className={descBarClasses}>
            <Avatar>{media.author[0]}</Avatar>
            <Typography className={classes.usernameText} variant="body1">
              {media.author}
              <Typography variant="caption">{media.date}</Typography>
            </Typography>
            <Typography className={classes.favoriteText} variant="body1">
              {media.favourites}
            </Typography>
            <IconButton className={classes.iconButton} aria-label="Favorite">
              <FavoriteIcon />
            </IconButton>
            <IconButton className={classes.iconButton} aria-label="Share">
              <ShareIcon />
            </IconButton>
          </div>
        </Content>
      </div>
    );
  }
}

export default withStyles(styles)(Homepage);
