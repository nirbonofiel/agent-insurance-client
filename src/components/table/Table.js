import React from 'react';
import './Table.scss';

const Table = (props) => {
    let tbody = null;
    switch(props.type){
        case 'agent':
            tbody = props.tbody.map(agent =>
                <tr key={agent.id}>
                    <td>{agent.id}</td>
                    <td>{agent.full_name}</td>
                    <td>{agent.email}</td>
                    <td>{agent.company_name}</td>
                </tr>)
        break;
        case 'insurancesForAgent':
            tbody = props.tbody.map(insurancesForAgent =>
                <tr key={insurancesForAgent.id}>
                    <td>{insurancesForAgent.agent_name}</td>
                    <td>{insurancesForAgent.insurance_name}</td>
                    <td>{insurancesForAgent.monthly_cost}</td>
                </tr>)
        break;
        case 'insurances':
            tbody = props.tbody.map(insurancesForAgent =>
                <tr key={insurancesForAgent.id}>
                    <td>{insurancesForAgent.id}</td>
                    <td>{insurancesForAgent.name}</td>
                    <td>{insurancesForAgent.monthly_cost}</td>
                </tr>)
        break;
        default: return;
    }
    return (
        <div className="container table-container">
            <table className="table">
            <thead>
                <tr>
                    {props.thead.map(title =>
                        <th key={title.name}>{title.name}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {tbody}
            </tbody>
            </table>
        </div>
    )
}

export default Table;