import { useEffect, useState } from 'react'
import useApi from './useApi'

function App() {
  const {data, loading, error} = useApi('https://dummyjson.com/products')

  if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h3>Product List</h3>
            <ol>
                {data?.products?.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ol>
        </div>
    );
}

export default App
