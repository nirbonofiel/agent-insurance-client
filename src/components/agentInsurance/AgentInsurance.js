import React from 'react';
import './AgentInsurance.scss';
import Table from '../table/Table';
import Dropdown from '../dropdown/Dropdown';

const AgentInsurance = () => {
    const agentInsuranceThead = [{'name':'Agent'},{'name':'Insurance'},{'name':'Monthly Cost'}];
    const agents = [{name:'Moshiko',id:1},{name:'Timor',id:2},{name:'Rami',id:3},{name:'Avi',id:4}]
    return (
        <div className="container agent-insurance-container">
            <Dropdown agents={agents}/>
            <Table thead={agentInsuranceThead}/>
        </div>
    )
}

export default AgentInsurance;