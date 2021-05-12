import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { movieContext } from "../../contexts/MovieContext";
import "./Cover.css";
import Logo from "../../logos/netflix-logo.png";
import { Button, IconButton, Typography } from "@material-ui/core";
import { Info, PlayArrow } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Cover = () => {
    const { movie, getMovieById } = useContext(movieContext);
    const arr = [
        "x4E2ykQb0FsLSKTEmo9Z",
        "A9Tu51kZcbDYM0wwL5BS",
        "GrtVwyl6y6jOQdsKUbHN",
        "zyKXqHc7lpqukZYVh3ea",
        "AagXa03yD8dmx4zK2YOa",
        "BCD1uYrn49d1dDFIsmXI",
        "BsoOc0ATwOq0NgVLi9qr",
        "JnvtPGxTzKGZsTDC5G1d",
        "D1BtcaSVtXmffIeLlgT2",
    ];
    function random() {
        return Math.floor(Math.random() * 9);
    }
    useEffect(() => {
        getMovieById(arr[random()]);
    }, []);
    return (
        <div className="cover-container">
            {movie[0] ? (
                <div className="cover-video-wrapper">
                    <div className="cover-desc">
                        <img
                            src={Logo}
                            alt="netflix-logo"
                            className="cover-logo"
                        />
                        <p className="cover-text">{movie[0].title}</p>

                        <div className="buttons">
                            <Button
                                size="large"
                                className="cover-btn-play"
                                component={Link}
                                to={`/watch/${movie[0].id}`}
                                variant="contained"
                                startIcon={<PlayArrow />}
                            >
                                Play
                            </Button>
                            <Button
                                className="cover-btn-info"
                                component={Link}
                                to={`/details/${movie[0].id}`}
                                startIcon={<Info />}
                                variant="contained"
                                style={{
                                    backgroundColor: "rgb(80, 80, 80)",
                                    color: "white",
                                    marginLeft: "10px",
                                }}
                                size="large"
                            >
                                More Info
                            </Button>
                        </div>
                        <div className="buttons-hidden">
                            <IconButton
                                size="large"
                                className="cover-btn-play"
                                component={Link}
                                to={`/watch/${movie[0].id}`}
                                variant="contained"
                                style={{ color: "white" }}
                            >
                                <PlayArrow />
                            </IconButton>
                            <IconButton
                                size="large"
                                className="cover-btn-info"
                                component={Link}
                                to={`/details/${movie[0].id}`}
                                style={{
                                    color: "white",
                                    marginLeft: "10px",
                                }}
                            >
                                <Info />
                            </IconButton>
                        </div>
                    </div>
                    <div className="cover-video-container">
                        <ReactPlayer
                            className="cover-video"
                            loop
                            width="100%"
                            height="100%"
                            playing={true}
                            url={movie[0].fulltrailer}
                            muted={true}
                            volume={null}
                            controls={false}
                        />
                    </div>
                </div>
            ) : (
                <h1>loading...</h1>
            )}
        </div>
    );
};

export default Cover;
