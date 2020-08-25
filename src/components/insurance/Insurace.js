import React from 'react';
import Table from '../table/Table';
import {useSelector} from 'react-redux';

const Insurance = () => {
    const agentInsuranceSelector = useSelector(state => state.agentInsurace);
    const insuranceThead = [{'name':'Id'},{'name':'Name'},{'name':'Monthly Cost'}];
    return (
        <div className="container agent-insurance-container">
            <Table thead={insuranceThead} tbody={agentInsuranceSelector.insurances} type="insurances"/>
        </div>
    )
}

export default Insurance;