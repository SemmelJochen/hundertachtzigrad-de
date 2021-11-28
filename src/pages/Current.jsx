import React from "react";
import bg from "./assets/img/foto.jpg";
import logo from "./assets/img/hundertachtzigrad.png";
import {
  responsiveFontSizes,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      // error: will use the default color
    },
    typography: {
      fontFamily: [
        "Avenir Heavy",
        "AppleSDGothicNeo-Light",
        "Avenir-Light",
        "Helvetica",
        "Verdana",
        "Roboto",
      ].join(","),
    },
  })
);

export default function Current() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "black",
        backgroundSize: "auto 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "fixed",
        overflowY: "scroll",
      }}
    >
      <ThemeProvider theme={theme}>
        <div
          className="navbar"
          style={{
            position: "static",
            width: "100%",
            height: "150px",
          }}
        >
          <img
            alt="logo"
            src={logo}
            style={{
              width: "200px",
            }}
          />
        </div>
        <div
          style={{
            height: "calc(100vh- 150px)",
          }}
        >
          <div
            container
            style={{
              marginTop: "50px",
              width: "100%",
              height: "calc(100vh-150px)",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "flex-start",
              display: "flex",
              flexWrap: "wrap",
              color: "white",
              flexGrow: 1,
            }}
          >
            <div
              item
              style={{ width: "40%", minWidth: "350px", margin: "15px" }}
            >
              <Typography variant="subtitle1">SchmitzBrothers</Typography>
              <div
                className="video-container"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                }}
              >
                <iframe
                  title="Main Video"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allowFullScreen
                  src="https://www.youtube.com/embed/fmoOiABImQQ?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
                />
              </div>
            </div>
            <div
              item
              style={{ width: "40%", minWidth: "350px", margin: "15px" }}
            >
              <Typography variant="subtitle1">Making Of</Typography>
              <div
                className="video-container"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                }}
              >
                <iframe
                  title="making-of"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allowFullScreen
                  src="https://www.youtube.com/embed/CEYE4NKRzIc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
                />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
