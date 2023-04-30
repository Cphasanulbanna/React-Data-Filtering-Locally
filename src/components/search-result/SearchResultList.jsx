import React from "react";

//css
import "./searc-result.css";

function SearchResultList({ names, query }) {
    const filteredData = names?.filter((name) => name.toLowerCase().includes(query));

    const renderNames = () => {
        return filteredData?.map((name, index) => {
            return (
                <div
                    key={index}
                    className="result"
                >
                    <h1 className="title">{name}</h1>
                </div>
            );
        });
    };
    return (
        <div className="search-result-container">
            <div className="sub-container">
                <div className="content-box">{renderNames()}</div>
            </div>
        </div>
    );
}

export default SearchResultList;
