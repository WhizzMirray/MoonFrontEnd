import React from "react";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Badge from "@material-ui/core/Badge";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import ReplyIcon from "@material-ui/icons/Reply";

import Image from "../components/Image.jsx";
import Content from "../components/Content.jsx";

import styles from "assets/styles/components/mediaStyle.js";
import img from "assets/img/test1.jpg";
const loggedUser = {
  username : "Whizzmirray"
};
const media = {
  comments: [
    {
      id: 2,
      name: "Stevenson",
      date: "4 Hours Ago",
      comment: "BEst pic ever!",
      comments: [
        {
          id: 3,
          name: "Whizzmirray",
          date: "2 Hours Ago",
          comment: "@Stevenson Thanks!"
        },
        {
          id: 4,
          name: "Stevenson",
          date: "2 Hours Ago",
          comment: "No Problem"
        }
      ]
    },
    {
      id: 1,
      name: "JOjo",
      date: "3 Hours Ago",
      comment: "I Like this",
      comments: []
    }
  ],
  title : "A very very very long title",
  author: "Whizzmirray",
  date: "Fri, 25 may 2018",
  favourites: 54,
  description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSuspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  tags: ["House", "Nice","Atmospheric"],
};
class MediaPage extends React.Component {
  render() {
    const { comments } = media;
    const { classes } = this.props;
    const topBarClasses = classNames({
      [classes.horFlex]: true,
      [classes.justifyCenter]: true
    });
    const descBarClasses = classNames({
      [classes.horFlex]: true,
      [classes.paddingBreakpoint]: true
    });

    return (
      <Content>
        <div className={topBarClasses}>
          <Typography
            className={classes.header}
            variant="headline"
            align="center"
          >
            {media.title}
          </Typography>
          <IconButton className={classes.iconButton} aria-label="Delete">
            <EditIcon />
          </IconButton>
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
        <hr width="90%" />
        <ExpansionPanel defaultExpanded className={classes.expansionRoot}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subheading">Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {media.description}
              <br />
              <br />
              { "Tags : " + media.tags.join(", ") + "." }
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className={classes.commentSection}>
          <Typography gutterBottom variant="subheading">
            Comments
          </Typography>
          <div className={classes.commentForm}>
            <Avatar>{loggedUser.username[0]}</Avatar>
            <FormControl className={classes.formControl}>
              <Input
                className={classes.input}
                multiline
                rowsMax={4}
                placeholder="Write your comment"
                endAdornment={
                  <IconButton
                    className={classes.adornmentSend}
                    aria-label="Send"
                  >
                    <SendIcon />
                  </IconButton>
                }
              />
            </FormControl>
          </div>
          <div className={classes.comments}>
            {comments.map(e => (
              <Comment
                classes={classes}
                key={e.id}
                name={e.name}
                date={e.date}
                comment={e.comment}
              >
                {e.comments.map(c => (
                  <Comment
                    classes={classes}
                    key={c.id}
                    name={c.name}
                    date={c.date}
                    comment={c.comment}
                    nested
                  />
                ))}
              </Comment>
            ))}
          </div>
        </div>
      </Content>
    );
  }
}

const Comment = ({ ...props }) => {
  const { classes, name, comment, date, nested, children } = props;
  const commentTabClasses = classNames({
    [classes.horFlex]: true,
    [classes.commentTabPaddingBreakpoint]: true
  });
  return (
    <div className={nested ? classes.marginComment : null}>
      <div className={commentTabClasses}>
        <Avatar>{name[0]}</Avatar>
        <Typography className={classes.usernameText} variant="body1">
          {name}
          <Typography variant="caption">{date}</Typography>
        </Typography>
        <IconButton className={classes.iconButton} aria-label="Reply">
          <ReplyIcon />
        </IconButton>
      </div>
      <Typography className={classes.comment}>{comment}</Typography>
      <hr width="90%" />
      {children}
    </div>
  );
};

export default withStyles(styles)(MediaPage);
