import React from "react";

//css
import "./searc-result.css";

function SearchResultList({ names, query }) {
    const filteredData = names?.filter((name) => name.toLowerCase().includes(query));

    //highlight & render filtered names
    const renderNames = () => {
        return filteredData?.map((name, i) => {
            //finding index of substring(q) in name
            const indexOfQueryInName = name.indexOf(query);

            //extracting beginning of text   when highlighted part is in the middle of text
            const start = name.slice(0, indexOfQueryInName);

            const match = name.slice(indexOfQueryInName, indexOfQueryInName + query.length);

            //extracting remaining portion of text after highlighted part
            const end = name.slice(indexOfQueryInName + query.length);
            return (
                <div
                    key={i}
                    className="result"
                >
                    <h1 className="title">
                        {start}
                        <span>{match}</span>
                        {end}
                    </h1>
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
