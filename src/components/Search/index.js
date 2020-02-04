import React from "react";

function SearchBar(props) {
    return (
        <form className="text-center">
            <div className="form-group">
                <input type="text" className="form-control w-75 d-inline" 
                    value={props.search} 
                    onChange={props.handleInputChange}
                />
            </div>
        </form>
    );
}

export default SearchBar;