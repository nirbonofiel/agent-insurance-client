import React from 'react';
import './AgentInsurance.scss';
import Table from '../table/Table';

const AgentInsurance = () => {
    const agentInsuranceThead = [{'name':'Agent'},{'name':'Insurance'},{'name':'Monthly Cost'}];
    return (
        <div className="container agent-insurance-container">
            <Table thead={agentInsuranceThead}/>
        </div>
    )
}

export default AgentInsurance;