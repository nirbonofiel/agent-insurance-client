import React from 'react';
import './Insurance.scss';
import Table from '../table/Table';

const Insurance = () => {
    const insuranceThead = [{'name':'Id'},{'name':'Name'},{'name':'Monthly Cost'}];
    return (
        <div className="container agent-insurance-container">
            <Table thead={insuranceThead}/>
        </div>
    )
}

export default Insurance;