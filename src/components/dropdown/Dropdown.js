import React from 'react';
import './Dropdown.scss';

const Dropdown = (props) => {
    return (
        <div className="dropdown-contaniner">
            <select className="dropdown" onChange={(event)=>props.changeAgent(event.target.value)}>
                <option value="">Choose Agent</option>
                {props.agents.map(agent=>(
                    <option key={agent.id} value={agent.id}>
                        {agent.full_name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;