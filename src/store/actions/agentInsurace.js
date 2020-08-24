import axios from 'axios';
import * as actionType from '../actionTypes';

export const getAgents = () =>{
 return (dispatch) =>{
     axios.get('/agent',{
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS',
          },
        })
     .then(res => dispatch(getAllAgents(res.data.data)))
     .catch(err=> "Something went wrong")
 };
};



export const getInsurances = () =>{
    return (dispatch) =>{
        axios.get('/insurance',{
           headers: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET,OPTIONS',
             },
           })
        .then(res => dispatch(getAllInsurances(res.data.data)))
        .catch(err=> "Something went wrong")
    };
   };


   export const getInsurancesForAgent = () =>{
    return (dispatch) =>{
        axios.get('/insuranceForAgent',{
           headers: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET,OPTIONS',
             },
           })
        .then(res => dispatch(getAllInsurancesForAgent(res.data.data)))
        .catch(err=> "Something went wrong")
    };
   };


const getAllAgents = (data) =>{
    return {
        type: actionType.GET_AGENTS,
        payload: {agents: data},
    };
};

const getAllInsurances = (data) =>{
    return {
        type: actionType.GET_INSURANCE,
        payload: {insurances: data},
    };
};

   const getAllInsurancesForAgent = (data) =>{
    return {
        type: actionType.GET_INSURANCE_FOR_AGENT,
        payload: {insurancesForAgent: data},
    };
};