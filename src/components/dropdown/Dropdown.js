import React from 'react';
import './Dropdown.scss';

const Dropdown = (props) => {
    return (
        <div className="dropdown-contaniner">
            <select className="dropdown">
                <option>Choose Agent</option>
                {props.agents.map(agent=>(
                    <option key={agent.id} value={agent.id}>
                        {agent.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;