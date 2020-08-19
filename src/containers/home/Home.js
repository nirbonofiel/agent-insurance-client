import React from 'react';
import AgentInsurance from '../../components/agentInsurance/AgentInsurance';

const Home = () => {
    return (
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>

            <AgentInsurance />
        </div>
    )
}

export default Home;