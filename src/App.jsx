import React from 'react';
import useFetch from './Usefetch.jsx';

function App() {
  const url = 'https://fakestoreapi.com/products/1';

  const data = useFetch(url);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product Details</h1>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Price:</strong> ${data.price}</p>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>Category:</strong> {data.category}</p>
      <img src={data.image} alt={data.title} style={{ maxWidth: 200 }} />
      <p><strong>Rating:</strong> {data.rating.rate} ({data.rating.count} reviews)</p>
    </div>
  );
}

export default App;
