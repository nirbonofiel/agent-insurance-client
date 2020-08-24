import React, {useEffect} from 'react';
import './Home.scss'
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getAgents, getInsurances, getInsurancesForAgent} from '../../store/actions/agentInsurace'

const Home = (props) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAgents());
        dispatch(getInsurances());
        dispatch(getInsurancesForAgent());
    },[dispatch])
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