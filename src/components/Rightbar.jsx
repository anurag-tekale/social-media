import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageListItem,
  ImageList,
  Typography,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position={"fixed"} width={"25%"}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/14309988/pexels-photo-14309988.jpeg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/18295331/pexels-photo-18295331/free-photo-of-no-title.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/14309988/pexels-photo-14309988.jpeg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/18295331/pexels-photo-18295331/free-photo-of-no-title.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/14309988/pexels-photo-14309988.jpeg"
          />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/18295331/pexels-photo-18295331/free-photo-of-no-title.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/14309988/pexels-photo-14309988.jpeg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/18295331/pexels-photo-18295331/free-photo-of-no-title.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mb={1} mt={5}>
          Latest Pictures
        </Typography>
        <ImageList cols={3} rowHeight={"20%"} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3547176/pexels-photo-3547176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3547176/pexels-photo-3547176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3547176/pexels-photo-3547176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={5}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
