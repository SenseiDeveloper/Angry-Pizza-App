import React from 'react';
import {Link} from "react-router-dom";

export const ButtonConstructor = () => {
    return (
        <button className="btn btn-primary">
            <Link to="/pizza-constructor">Створити піцу</Link>
        </button>
    );
};
