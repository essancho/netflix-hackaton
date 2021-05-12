import React from "react";
import algoliasearch from "algoliasearch/lite";
import RegularCard from "../MovieCard/RegularCard";
import "./Search.css";
import {
    SearchBox,
    InstantSearch,
    Hits,
    Pagination,
    Configure,
    Menu,
    ClearRefinements,
} from "react-instantsearch-dom";
import { Container } from "@material-ui/core";
import MainNavbar from "../Main/MainNavbar";
import { SearchRounded } from "@material-ui/icons";
import Footer from "../Main/Footer";
const client = algoliasearch("WDJMRYNXCY", "55157d2e5c2ff664b3a0809d70eb0aad");
const Search = () => {
    function Hit(props) {
        return (
            <div className="hit-wrapper">
                <RegularCard category={props.hit.category} item={props.hit} />
            </div>
        );
    }
    return (
        <div className="search-wrapper">
            <MainNavbar />
            <Container>
                <div className="search-container">
                    <InstantSearch searchClient={client} indexName="movies">
                        <div className="search-inp">
                            <SearchBox
                                translations={{
                                    placeholder:
                                        "   Search for movies, people, genres, etc...",
                                }}
                            />
                        </div>
                        <div className="search-controls">
                            <Configure hitsPerPage={6} />
                            <Menu attribute="category" />
                            <ClearRefinements
                                translations={{
                                    reset: "Show All",
                                }}
                            />
                            <Pagination />
                        </div>
                        <div className="hits-container">
                            <Hits hitComponent={Hit} />
                        </div>
                    </InstantSearch>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Search;
