import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Get() {
const [userdata, setUserData] = useState([]);

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log(response);
        setUserData(response.data);
    })
    .catch((error) => {
        console.error('Error fetching users:', error);
    });
}, []);

return (
    <div>
    {userdata.map((data) => (
        <div key={data.id}>
        <h2>{data.name}</h2>
        </div>
    ))}
    </div>
);
}

export default Get;
