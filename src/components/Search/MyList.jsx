import {
    Button,
    ButtonGroup,
    CircularProgress,
    Container,
    Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { movieContext } from "../../contexts/MovieContext";

import { calcTotalPrice } from "../../helpers/calcPrice";
import Footer from "../Main/Footer";
import MainNavbar from "../Main/MainNavbar";
import RegularCard from "../MovieCard/RegularCard";

const MyList = () => {
    const {
        getCart,
        cart,
        changeProductCount,
        removeProductsFromCart,
    } = useContext(movieContext);
    const history = useHistory();
    useEffect(() => {
        getCart();
    }, []);

    return (
        <div style={{ backgroundColor: "rgb(10, 10, 10)", height: "100%" }}>
            <MainNavbar />
            <Container>
                <Typography
                    variant="h4"
                    style={{
                        textAlign: "center",
                        paddingTop: "100px",
                        color: "white",
                    }}
                >
                    My List
                </Typography>
                <div
                    style={{ maxWidth: "960px", margin: "0 auto" }}
                    className="cart"
                >
                    {cart.products ? (
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            {cart.products.map((elem) => (
                                <div
                                    style={{
                                        width: "315px",
                                        height: "285px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <RegularCard
                                        key={elem.item.id}
                                        item={elem.item}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <CircularProgress />
                    )}
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default MyList;
