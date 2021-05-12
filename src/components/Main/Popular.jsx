import { Container, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { movieContext } from "../../contexts/MovieContext";
import MovieCard from "../MovieCard/MovieCard";
import "./Popular.css";
const Popular = () => {
    const { popular, getPopularMovies } = useContext(movieContext);
    useEffect(() => {
        getPopularMovies();
    }, []);
    return (
        <Container>
            <div>
                <div className="popular-styling">
                    <Typography
                        className="popular-title"
                        style={{ color: "white" }}
                        variant="h5"
                    >
                        Popular on Netflix
                    </Typography>
                    {popular &&
                        popular.map((item) => (
                            <MovieCard
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

export default Popular;
