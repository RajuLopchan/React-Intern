import axios from 'axios';
import React, { useState } from 'react';

function Put() {
const initialData = { firstname: '', lastname: '' };
const [formData, setFormData] = useState(initialData);

  // Handle input change
const handleData = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
};

  // Create (POST)
const onSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
    console.log('Create Response:', response.data);
    } catch (error) {
    console.error('Error posting data:', error);
    }
};

  // Update (PUT)
const handleUpdate = async () => {
    try {
    const response = await axios.put('https://jsonplaceholder.typicode.com/users/1', formData);
    console.log('Update Response:', response.data);
    } catch (error) {
    console.error('Error updating data:', error);
    }
};

  // Delete (DELETE)
const handleDelete = async () => {
    try {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/users/1');
    console.log('Delete Response:', response.data);
      setFormData(initialData); // Clear form after delete
    } catch (error) {
    console.error('Error deleting data:', error);
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

    <button type="button" onClick={handleUpdate}>
        Update
    </button>
    <button type="button" onClick={handleDelete}>
        Delete
    </button>
    </form>
);
}

export default Put;
