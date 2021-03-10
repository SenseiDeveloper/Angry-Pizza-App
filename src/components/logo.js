import React from 'react';
import {Link} from "react-router-dom";

export const Logo = () => {
    return <Link to="/home"><img src={process.env.PUBLIC_URL + '/images/logo-min.png'} alt="Angry Pizza"/></Link>;
};
