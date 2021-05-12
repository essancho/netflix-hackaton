import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { movieContext } from "../../contexts/MovieContext";
import MainNavbar from "../Main/MainNavbar";
import "./AdminPage.css";
const AdminPage = () => {
    const {
        getMovies,
        moviesData,
        getMovieById,
        movie,
        deleteMovie,
    } = useContext(movieContext);
    useEffect(() => {
        getMovies();
    }, []);
    console.log(moviesData);
    return (
        <>
            <MainNavbar />
            <div className="admin-wrapper">
                <Container>
                    <div className="add-manage">
                        <h3>Manage all movies</h3>

                        <Link to="/add-movie">
                            <button>Add New Movie</button>
                        </Link>
                    </div>
                    <div className="admin-container">
                        {moviesData ? (
                            <>
                                {moviesData.map((item) => (
                                    <div className="admin-movie">
                                        <img
                                            width={100}
                                            src={item.poster}
                                            alt="img-poster-admin"
                                        />
                                        <div>
                                            <p>{item.title}</p>
                                            <p>id: {item.id}</p>
                                            <div>
                                                <Link to={`edit/${item.id}`}>
                                                    <button>Edit</button>
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteMovie(item.id)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <h1>loading...</h1>
                        )}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default AdminPage;
