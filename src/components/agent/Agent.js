import React from 'react';
import Table from '../table/Table';
import {useSelector} from 'react-redux';

const Agent = () => {
    const agentInsuranceSelector = useSelector(state => state.agentInsurace);
    const agentThead = [{'name':'Id'},{'name':'Full Name'},{'name':'Email'},{'name':'Company Name'}];
    return (
        <div className="container agent-insurance-container">
            <Table thead={agentThead} tbody={agentInsuranceSelector.agents} type={'agent'}/>
        </div>
    )
}

export default Agent;