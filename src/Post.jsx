import axios from 'axios';
import React, { useState } from 'react';

function Post() {
const initialData = { firstname: '', lastname: '' };
const [formData, setFormData] = useState(initialData);

const handleData = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
};

const onSubmit = async (e) => {
e.preventDefault();
try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
    console.log('Response:', response.data);
} catch (error) {
    console.error('Error posting data:', error);
}
};


return (
    <form onSubmit={onSubmit}>
    <label>
        First Name:
        <input
        type="text"
        name="firstname"
        value={formData.firstname}
        placeholder="Enter First Name"
        onChange={handleData}
        />
    </label>
    <br />
    <br />
    <label>
        Last Name:
        <input
        type="text"
        name="lastname"
        value={formData.lastname}
        placeholder="Enter Last Name"
        onChange={handleData}
        />
    </label>
    <br />
    <br />
    <button type="submit">Submit</button>
    </form>
);
}

export default Post;
