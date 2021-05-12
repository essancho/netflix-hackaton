import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { movieContext } from "../../contexts/MovieContext";
import Footer from "../Main/Footer";
import MainNavbar from "../Main/MainNavbar";

const Dashboard = () => {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const { getUserInfo, cUser } = useContext(movieContext);
    const history = useHistory();
    useEffect(() => {
        getUserInfo(currentUser.uid);
    }, []);
    async function handleLogout() {
        setError("");
        try {
            await logout();
            history.push("/landing-page");
        } catch {
            setError("Failed to Log Out");
        }
    }
    console.log(cUser);
    return (
        <div style={{ backgroundColor: "rgb(15,15,15)" }}>
            <MainNavbar />
            <Card>
                {cUser && (
                    <Card.Body>
                        <h2
                            style={{ marginTop: "100px" }}
                            className="text-center mb-4"
                        >
                            Profile
                        </h2>
                        {error && <Alert variant="danger">{error}</Alert>}

                        <strong>
                            {cUser.firstname} {cUser.lastname}
                        </strong>
                        <br />
                        <strong>Email:</strong>
                        {cUser.email}
                        <Link
                            variant="secondary"
                            to="/update-profile"
                            className="btn btn-dark w-100 mt-3"
                        >
                            Update Profile
                        </Link>
                    </Card.Body>
                )}
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>
                        Log Out
                    </Button>
                </div>
            </Card>
            <Footer />
        </div>
    );
};

export default Dashboard;
