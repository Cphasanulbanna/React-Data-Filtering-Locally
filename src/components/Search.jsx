import React, { useState } from "react";

//css
import "./search.css";

//components
import SearchBar from "./search-bar/SearchBar";
import SearchResultList from "./search-result/SearchResultList";

function Search() {
    //states
    const [query, setQuery] = useState("");
    const [names] = useState([
        "banna",
        "baseem",
        "arshak",
        "jasil",
        "safwan",
        "anshab",
        "binshad",
        "shahid",
        "salman",
        "nafih",
        "navas",
        "jinas",
        "ameen",
        "akshay",
        "faseen",
        "faheem",
        "adarsh",
    ]);

    return (
        <div className="main-container">
            <div className="wrapper">
                <div className="content-box">
                    <SearchBar
                        setQuery={setQuery}
                        query={query}
                    />
                    <SearchResultList
                        names={names}
                        query={query}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;
