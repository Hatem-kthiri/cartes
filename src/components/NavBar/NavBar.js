import React, { useState } from "react";

const NavBar = ({ setSearch }) => {
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Movie ... "
                onChange={handleChange}
            />
        </div>
    );
};

export default NavBar;
