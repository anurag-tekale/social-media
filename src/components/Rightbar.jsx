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
        <Typography variant="h6" fontWeight={400}>
          Online Friends
        </Typography>
        <AvatarGroup max={10}>
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
        <Typography variant="h6" fontWeight={400} mb={1} mt={5}>
          Latest Pictures
        </Typography>
        <ImageList cols={3} rowHeight={"20%"} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/18418642/pexels-photo-18418642/free-photo-of-budding-water-lily.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/18036573/pexels-photo-18036573/free-photo-of-light-sea-city-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/18361554/pexels-photo-18361554/free-photo-of-headlight-of-volkswagen-beetle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={400} mt={5}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt=""
                src="https://images.pexels.com/photos/6605397/pexels-photo-6605397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Food Business?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Anurag
                  </Typography>
                  {" — We can discuss about it, I'll calculate the expenses…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt=""
                src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Open Source"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to everyone
                  </Typography>
                  {" — Wish I could push the code, but I'm out of town…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt=""
                src="https://images.pexels.com/photos/732632/pexels-photo-732632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Hiking"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    MakeMyTrip
                  </Typography>
                  {" — Tickets confirmed, check your mail for the invoice…"}
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
