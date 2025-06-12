import React from 'react';
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products/1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
