import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();  // Get product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <img className="w-1/3 h-auto object-cover" src={`data:image/png;base64,${product.image}`} alt={product.title} />
        <p className="mt-4 text-lg">{product.description}</p>
        <p className="mt-2 text-teal-600 text-2xl">${product.price}</p>
        <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
