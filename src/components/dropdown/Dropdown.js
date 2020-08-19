import React from 'react';

const Dropdown = (props) => {
    return (
        <div>
            <select>
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