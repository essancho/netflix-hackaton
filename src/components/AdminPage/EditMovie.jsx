import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { movieContext } from "../../contexts/MovieContext";

const EditMovie = (props) => {
    const { getMovieById, movie, updateMovie } = useContext(movieContext);
    const history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getMovieById(props.match.params.id);
    }, []);
    const [forEdit, setForEdit] = useState(movie[0]);

    const [edit, setEdit] = useState();

    function handleValue(e) {
        let newObj = {
            ...edit,
            [e.target.name]: e.target.value,
        };
        setEdit(newObj);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await updateMovie(props.match.params.id, edit);
            history.push("/admin");
        } catch {
            setError("Failed to Add Product");
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <div>
            {movie[0] ? (
                <div className="edit-container">
                    <div className="edit-left">
                        <div>
                            <p>
                                <strong>Title: </strong>
                                {movie[0].title}
                            </p>
                            <p>
                                <strong>Description: </strong>
                                {movie[0].desc}
                            </p>
                            <p>
                                <strong>Director: </strong>
                                {movie[0].director}
                            </p>
                            <p>
                                <strong>Main Category: </strong>
                                {movie[0].maincategory}
                            </p>
                            <p>
                                <strong>Year: </strong>
                                {movie[0].year}
                            </p>
                        </div>
                    </div>
                    <div className="add-container">
                        <input
                            placeholder="Title"
                            onChange={handleValue}
                            id="inp-title"
                            name="title"
                            type="text"
                        />
                        <input
                            placeholder="Description"
                            onChange={handleValue}
                            id="inp-desc"
                            name="desc"
                            type="text"
                        />
                        <input
                            placeholder="Director"
                            onChange={handleValue}
                            id="inp-director"
                            name="director"
                            type="text"
                        />
                        <input
                            placeholder="Main Category"
                            onChange={handleValue}
                            id="inp-maincategory"
                            name="maincategory"
                            type="text"
                        />
                        <input
                            placeholder="Poster URL"
                            onChange={handleValue}
                            id="inp-poster"
                            name="poster"
                            type="text"
                        />

                        <input
                            placeholder="Movie URL"
                            onChange={handleValue}
                            id="inp-link"
                            name="link"
                            type="text"
                        />
                        <input
                            placeholder="Year"
                            onChange={handleValue}
                            id="inp-year"
                            name="year"
                            type="number"
                        />

                        <button id="add-submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            ) : (
                <h1>loading...</h1>
            )}
        </div>
    );
};

export default EditMovie;
