import React, {useState, useEffect} from 'react';
import './AgentInsurance.scss';
import Table from '../table/Table';
import Dropdown from '../dropdown/Dropdown';
import {useSelector} from 'react-redux';

const AgentInsurance = () => {
    const agentInsuranceSelector = useSelector(state => state.agentInsurace);
    const [currAgentId,setCurrAgentId] = useState('');
    const agentInsuranceThead = [{'name':'Agent'},{'name':'Insurance'},{'name':'Monthly Cost'}];
    const getFilteredList = (list) => {
        let newList = list;
        if (currAgentId !== '') {
            newList = list.filter((index) => index.agent_id === +currAgentId);
        }
        return newList;
      };
    useEffect(()=>{
        // getFilteredList(agentInsuranceSelector.insurancesForAgent);
    },[agentInsuranceSelector.insurancesForAgent,currAgentId])
    return (
        <div className="container agent-insurance-container">
            <Dropdown agents={agentInsuranceSelector.agents} changeAgent={setCurrAgentId}/>
            <Table thead={agentInsuranceThead} tbody={getFilteredList(agentInsuranceSelector.insurancesForAgent)} type="insurancesForAgent" />
        </div>
    )
}

export default AgentInsurance;