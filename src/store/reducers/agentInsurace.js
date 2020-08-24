import * as actionType from '../actionTypes';
const initialState = {
    agents:[],
    insurances:[],
    insurancesForAgent:[]
};

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionType.GET_AGENTS:
            return {
                ...state,
                agents: action.payload.agents,
            };
        case actionType.GET_INSURANCE:
            return {
            ...state,
            insurances: action.payload.insurances,
        };
        case actionType.GET_INSURANCE_FOR_AGENT:
            return {
            ...state,
            insurancesForAgent: action.payload.insurancesForAgent,
        };
        default:
            return state;
    }
}

export default reducer;
