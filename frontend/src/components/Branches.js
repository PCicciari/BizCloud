import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Branches = () => {
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:6000/api/branches')
            .then(response => setBranches(response.data))
            .catch(error => console.error('Error fetching branches:', error));
    }, []);

    return (
        <div>
            <h1>Franchise Branches</h1>
            <ul>
                {branches.map(branch => (
                    <li key={branch.branch_id}>
                        {branch.branch_name} - {branch.location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Branches;