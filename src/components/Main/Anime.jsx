import { Container, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { movieContext } from "../../contexts/MovieContext";
import RegularCard from "../MovieCard/RegularCard";
import "./Action.css";
const Anime = () => {
    const { animeMovies, getAnimeMovies } = useContext(movieContext);
    useEffect(() => {
        getAnimeMovies();
    }, []);
    return (
        <Container>
            <div>
                <div className="action-styling">
                    <Typography
                        className="action-title"
                        style={{ color: "white" }}
                        variant="h5"
                    >
                        Anime
                    </Typography>
                    {animeMovies &&
                        animeMovies.map((item) => (
                            <RegularCard
                                key={item.title}
                                id={item.poster}
                                item={item}
                            />
                        ))}
                </div>
            </div>
        </Container>
    );
};

export default Anime;
