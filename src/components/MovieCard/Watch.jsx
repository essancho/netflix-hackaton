import React, { useContext, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import { movieContext } from "../../contexts/MovieContext";

import "./Watch.css";
import { Button } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import { useAuth } from "../../contexts/AuthContext";
import Footer from "../Main/Footer";
import Comments from "./Comments";
const Watch = (props) => {
    const { currentUser } = useAuth();
    const {
        movie,
        getMovieById,
        sendMovieHistory,
        getMovieHistory,
        watchedMovies,
        updateMovieHistory,
    } = useContext(movieContext);
    const [ready, setReady] = useState(false);
    const history = useHistory();
    const [playing, setPlaying] = useState(false);
    const [played, setPlayed] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [seek, setSeek] = useState(0);
    const ref = React.createRef();
    const [cont, setCont] = useState(false);
    const [movieId, setMovieId] = useState(0);
    const [continueMovie, setContinueMovie] = useState();
    const [movieObj, setMovieObj] = useState({});
    let [objId, setObjId] = useState();
    let [objPlayed, setObjPlayed] = useState();
    const [block, setBlocked] = useState(false);
    useEffect(() => {
        getMovieById(props.match.params.id);
    }, []);
    useEffect(() => {
        getMovieHistory(currentUser.uid);
    }, []);

    // async function checkIfWatched() {
    //     await getMovieHistory(currentUser.uid);
    //     watchedMovies.map((item) => {
    //         if (item.movieId === props.match.params.id) {
    //             console.log(item, "Found it");
    //             player.current.seekTo(item.played);
    //             setCont(true);
    //             setMovieId(item.id);
    //         } else {
    //             setCont(false);
    //             player.current.seekTo(0);
    //         }
    //     });
    // }

    async function checkIfWatched() {
        await watchedMovies.map((item) => {
            if (item.movieId === props.match.params.id) {
                setObjId(item.id);
                setObjPlayed(item.played);
                player.current.seekTo(item.played);
                setPlaying(true);
            }
        });
        setBlocked(true);
    }

    console.log(cont, "cont");
    console.log(movieId, "movieId");

    const handleSeekMouseDown = (e) => {
        setSeeking(true);
    };

    const handleSeekChange = (e) => {
        setPlayed(parseFloat(e.target.value));
    };
    const player = useRef(0);
    const handleSeekMouseUp = (e) => {
        setSeeking(false);
        console.log(e.target.value);
        player.current.seekTo(parseFloat(0.06264415172259462));
    };

    function progressLocal(e) {
        localStorage.setItem("progress", JSON.stringify(e));
        console.log(e);
    }
    async function handleVideo(e) {
        e.preventDefault();
        let progress = JSON.parse(localStorage.getItem("progress"));
        let watchHistory = {
            userId: currentUser.uid,
            movieId: movie[0].id,
            ...progress,
        };

        if (objId) {
            await updateMovieHistory(objId, watchHistory);
        } else {
            await sendMovieHistory(watchHistory);
        }

        history.push("/");
        console.log(objId);
    }

    return (
        <div className="watch-wrapper">
            <div>
                {movie[0] ? (
                    <div className="watch-container">
                        <ReactPlayer
                            ref={player}
                            height="100%"
                            width="100%"
                            playing={playing}
                            controls={false}
                            className="watch-video"
                            url={movie[0].link}
                            controls={true}
                            onProgress={(e) => progressLocal(e)}
                            onPause={(e) =>
                                console.log(e.target.played, "  Paused")
                            }
                            onSeek={(e) => setSeek(e)}
                            onDuration={(e) => console.log(e)}
                        />
                    </div>
                ) : (
                    <h1>loading...</h1>
                )}
                <div className="watch-controls">
                    <Button
                        disabled={block}
                        variant="contained"
                        onClick={checkIfWatched}
                        startIcon={<PlayArrow />}
                    >
                        Press to Play
                    </Button>
                    <Button variant="contained" onClick={handleVideo}>
                        Go Back
                    </Button>
                </div>
                <Comments id={props.match.params.id} />
            </div>
            <Footer />
        </div>
    );
};

export default Watch;
