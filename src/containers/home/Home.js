import React from 'react';
import './Home.scss'
import {NavLink} from 'react-router-dom';


const Home = (props) => {
    return (
        <div>
            <ul className="nav justify-content-center nav-container">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/insuranceForAgent'>Insurance For Agent</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/agent'>Agent</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/insurance'>Insurance</NavLink>
                </li>
            </ul>
            <main>{props.children}</main>
        </div>
    )
}

export default Home;