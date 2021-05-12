import React, { useState } from "react";

import { IconButton, Typography } from "@material-ui/core";
import {
    AddCircleOutline,
    ArrowDropDownCircleRounded,
    PlayCircleFilled,
} from "@material-ui/icons";

import "./MovieCard.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
const MovieCard = ({ item }) => {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="card-container">
            <div className="card-holder">
                <div>
                    {!playing ? (
                        <div
                            onMouseEnter={() => setPlaying(true)}
                            className="video-wrapper"
                            style={{
                                transition: "0.4s",
                                width: "233px",
                                height: "433px",
                            }}
                        >
                            <img
                                className="poster"
                                src={item.poster}
                                alt="poster-movie"
                            />
                        </div>
                    ) : (
                        <div
                            style={{
                                width: "280px",
                                height: "520px",
                                transition: "0.4s",
                                overflow: "hidden",
                            }}
                            className="video-wrapper"
                            onMouseLeave={() => setPlaying(false)}
                        >
                            <div className="top-shadow"></div>
                            <div className="control">
                                <div className="control-icons">
                                    <div className="play-add">
                                        <IconButton
                                            to={`/watch/${item.id}`}
                                            component={Link}
                                        >
                                            <PlayCircleFilled
                                                style={{
                                                    color: "white",
                                                    fontSize: "50px",
                                                }}
                                            />
                                        </IconButton>
                                        <AddCircleOutline
                                            style={{
                                                color: "white",
                                                fontSize: "40px",
                                                fontWeight: "lighter",
                                            }}
                                            onClick={() => console.log("ADD")}
                                            fontSize="large"
                                        />
                                    </div>
                                    <div className="show-more">
                                        <Link to={`/details/${item.id}`}>
                                            <IconButton>
                                                <ArrowDropDownCircleRounded
                                                    style={{
                                                        color: "white",
                                                        opacity: "90%",
                                                        fontSize: "40px",
                                                    }}
                                                />
                                            </IconButton>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text">
                                    <Typography variant="h3">
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        style={{ color: "red" }}
                                        variant="subtitle1"
                                    >
                                        {item.year}
                                    </Typography>
                                </div>
                            </div>

                            <ReactPlayer
                                style={{
                                    position: "absolute",
                                    objectFit: "fill",
                                }}
                                className="video"
                                width="100%"
                                height="100%"
                                playing={playing}
                                autoPlay={true}
                                muted={true}
                                volume={null}
                                url={item.trailer}
                                controls={false}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
