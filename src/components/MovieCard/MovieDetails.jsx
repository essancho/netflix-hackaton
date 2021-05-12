import { Button, ButtonGroup, IconButton, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player/file";
import { Link, useHistory } from "react-router-dom";
import { movieContext } from "../../contexts/MovieContext";
import "./MovieDetails.css";
import Logo from "../../logos/netflix-logo.png";
import {
    AddCircleOutline,
    Cancel,
    PlayArrow,
    ThumbDown,
    ThumbUp,
} from "@material-ui/icons";
const MovieDetails = (props) => {
    const { movie, getMovieById } = useContext(movieContext);
    const history = useHistory();
    useEffect(() => {
        getMovieById(props.match.params.id);
    }, []);

    return (
        <div className="details-container">
            <div className="container-shadow">
                {movie[0] ? (
                    <div className="details-wrapper">
                        <div className="details-video-container">
                            <div className="details-video-relative">
                                <ReactPlayer
                                    className="details-video-absolute"
                                    loop
                                    height="100%"
                                    width="100%"
                                    playing={true}
                                    muted={true}
                                    volume={null}
                                    controls={false}
                                    url={movie[0].fulltrailer}
                                />
                            </div>
                            <div className="close-button">
                                <IconButton onClick={() => history.goBack()}>
                                    <Cancel
                                        style={{
                                            color: "white",
                                            fontSize: "50px",
                                        }}
                                    />
                                </IconButton>
                            </div>
                            <div className="detail-video-overlays">
                                <img
                                    src={Logo}
                                    className="details-logo"
                                    alt="netflix-logo"
                                />
                                <p className="details-text">{movie[0].title}</p>
                                <div className="overlays-buttons visible">
                                    <Link to={`/watch/${movie[0].id}`}>
                                        <Button
                                            fontWeight={900}
                                            variant="contained"
                                            startIcon={<PlayArrow />}
                                        >
                                            <strong>WATCH NOW</strong>
                                        </Button>
                                    </Link>
                                </div>
                                <div className="overlays-buttons hidden">
                                    <Link to={`/watch/${movie[0].id}`}>
                                        <IconButton
                                            style={{ color: "white" }}
                                            variant="contained"
                                        >
                                            <PlayArrow />
                                        </IconButton>
                                    </Link>
                                </div>
                                <div className="details-desc">
                                    <div className="desc-left">
                                        <Typography style={{ color: "white" }}>
                                            {movie[0].desc}
                                        </Typography>
                                    </div>
                                    <div className="desc-right">
                                        <Typography
                                            style={{
                                                color: "red",
                                                marginRight: "6px",
                                            }}
                                        >
                                            Genres:
                                        </Typography>
                                        <div className="categories-list">
                                            {movie[0].category.map((item) => (
                                                <Typography
                                                    style={{
                                                        color: "white",
                                                        marginRight: "4px",
                                                    }}
                                                >
                                                    {item},
                                                </Typography>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ color: "white" }}>
                                    <Typography
                                        variant="h6"
                                        style={{
                                            color: "white",
                                            marginTop: "50px",
                                        }}
                                    >
                                        About <strong>{movie[0].title}</strong>
                                    </Typography>
                                    <Typography
                                        style={{
                                            color: "red",
                                            marginTop: "30px",
                                        }}
                                    >
                                        Director:
                                    </Typography>
                                    {movie[0].director}
                                    <div
                                        style={{ marginTop: "30px" }}
                                        className="desc-bottom"
                                    >
                                        <Typography
                                            style={{
                                                color: "red",
                                                marginRight: "6px",
                                            }}
                                        >
                                            Genres:
                                        </Typography>
                                        <div className="categories-list">
                                            {movie[0].category.map((item) => (
                                                <Typography
                                                    style={{
                                                        color: "white",
                                                        marginRight: "4px",
                                                    }}
                                                >
                                                    {item},
                                                </Typography>
                                            ))}
                                        </div>
                                    </div>
                                    <div
                                        style={{ marginTop: "30px" }}
                                        className="desc-bottom"
                                    >
                                        <Typography
                                            style={{
                                                color: "red",
                                                marginRight: "6px",
                                            }}
                                        >
                                            Starring:
                                        </Typography>
                                        <div className="categories-list">
                                            {movie[0].actors.map((item) => (
                                                <Typography
                                                    style={{
                                                        color: "white",
                                                        marginRight: "4px",
                                                    }}
                                                >
                                                    {item},
                                                </Typography>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>loading</h1>
                )}
            </div>
        </div>
    );
};

export default MovieDetails;
