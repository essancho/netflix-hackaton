import React, { useContext, useState } from "react";

import { IconButton, Typography } from "@material-ui/core";
import {
    AddCircleOutline,
    ArrowDropDownCircleRounded,
    PlayCircleFilled,
} from "@material-ui/icons";

import "./RegularCard.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { movieContext } from "../../contexts/MovieContext";
const RegularCard = ({ item }) => {
    const [playing, setPlaying] = useState(false);
    const { addProductToCart, checkProductInCart } = useContext(movieContext);
    return (
        <div className="regular-card-container">
            <div className="regular-card-holder">
                <div>
                    {!playing ? (
                        <div
                            onMouseEnter={() => setPlaying(true)}
                            className="regular-video-wrapper"
                            style={{
                                transition: "0.4s",
                                width: "233px",
                                height: "160px",
                            }}
                        >
                            <img
                                className="regular-poster"
                                src={item.poster}
                                alt="poster-movie"
                            />
                        </div>
                    ) : (
                        <div
                            style={{
                                width: "310px",
                                height: "280px",
                                transition: "0.4s",
                                overflow: "hidden",
                            }}
                            className="regular-video-wrapper"
                            onMouseLeave={() => setPlaying(false)}
                        >
                            <div className="regular-top-shadow"></div>
                            <div className="regular-control">
                                <div className="regular-control-icons">
                                    <div className="regular-play-add">
                                        <Link to={`/watch/${item.id}`}>
                                            <IconButton>
                                                <PlayCircleFilled
                                                    style={{
                                                        color: "white",
                                                        fontSize: "50px",
                                                    }}
                                                />
                                            </IconButton>
                                        </Link>
                                        <IconButton
                                            color={
                                                checkProductInCart(item.id)
                                                    ? "secondary"
                                                    : "primary"
                                            }
                                            onClick={() =>
                                                addProductToCart(item)
                                            }
                                        >
                                            <AddCircleOutline
                                                style={{
                                                    fontSize: "40px",
                                                    fontWeight: "lighter",
                                                }}
                                                fontSize="large"
                                            />
                                        </IconButton>
                                    </div>
                                    <div className="regular-show-more">
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
                                <div className="regular-text">
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
                                    top: "-75px",
                                }}
                                className="regular-video"
                                width="100%"
                                height="100%"
                                playing={playing}
                                autoPlay={true}
                                muted={true}
                                volume={null}
                                url={item.fulltrailer}
                                controls={false}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegularCard;
