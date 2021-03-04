import React from 'react';
import {Link} from "react-router-dom";

export const ButtonConstructor = () => {
    return (
        <button className="btn-primary">
            <Link to="/pizza-constructor">Сконструювати піцу</Link>
        </button>
    );
};
