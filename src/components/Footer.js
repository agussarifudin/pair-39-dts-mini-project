import React from "react";
import { Box } from "@mui/system";
import { AppBar, Typography, Toolbar } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "50px",
      }}
    >
      <AppBar position="absolute">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Mood Meter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
