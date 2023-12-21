import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import './assign.css'

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 2,width: 1485,height:200, }}>
        <Box
          sx={{
            my: 2,
            "& svg": {
              fontSize: "40px", 
              cursor: "pointer",
              mr: 1,
            },
            "& svg:hover": {  color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}p
        >
          <h5>Connect with us</h5>
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontSize: "0.8rem", 
            "@media (max-width:600px)": {
              fontSize: "0.6rem", 
            },
          }}
        >
          Stock-Management System by Bhuvanesh &copy;
        </Typography>
      </Box>
    </>
  );
};

export default Footer;