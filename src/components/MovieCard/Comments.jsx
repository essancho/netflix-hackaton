import { Avatar } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { movieContext } from "../../contexts/MovieContext";
import "./Comments.css";
const Comments = (props) => {
    const { getComments, sendComment, comments } = useContext(movieContext);
    const { currentUser } = useAuth();
    const [obj, setObj] = useState();
    const [body, setBody] = useState("");
    useEffect(() => {
        getComments(props.id);
    }, []);
    function handleValues(e) {
        setBody(e.target.value);
        let newObj = {
            ...obj,
            userId: currentUser.uid,
            email: currentUser.email,
            movieId: props.id,
            body: e.target.value,
            time: Date.now(),
        };
        setObj(newObj);
        console.log(obj);
    }
    async function handleClick(ob) {
        await sendComment(ob);
        setBody("");
        getComments(props.id);
    }
    return (
        <div>
            <div className="comments-container">
                <h5 style={{ color: "white" }}>Comments</h5>
                <div className="comments">
                    {comments ? (
                        comments.map((item) => (
                            <div className="message">
                                <Person />

                                <div className="message-text">
                                    <span className="message-span">
                                        <strong>{item.email}</strong>
                                    </span>
                                    <span>{item.body}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>loading...</h1>
                    )}

                    <div className="comments-control">
                        <input
                            value={body}
                            placeholder="Leave your comment.."
                            onChange={handleValues}
                            className="comments-inp"
                            type="text"
                        />
                        <button
                            className="comments-btn"
                            onClick={() => handleClick(obj)}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
