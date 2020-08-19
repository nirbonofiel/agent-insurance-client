import React from 'react';
import './Agent.scss';
import Table from '../table/Table';

const Agent = () => {
    const agentThead = [{'name':'Id'},{'name':'Full Name'},{'name':'Email'},{'name':'Company Name'}];
    return (
        <div className="container agent-insurance-container">
            <Table thead={agentThead}/>
        </div>
    )
}

export default Agent;