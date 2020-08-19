import React from 'react';
import './Table.scss';

const Table = (props) => {
    console.log(props.thead)
    return (
        <div className="container table-container">
            <table className="table">
            <thead>
                <tr>
                    {props.thead.map(title =>
                        <th key={title.name}>{title.name}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Table;