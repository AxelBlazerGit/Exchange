  import React, { useState, useEffect } from 'react';
  import { useParams } from 'react-router-dom';
  import a from '../assets/sell';

  const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
      console.log('Product ID:', id);  // Debugging: check the id
      const selectedProduct = a.find(item => item.id === parseInt(id));
      console.log('Selected Product:', selectedProduct);  // Debugging: check the product

      setProduct(selectedProduct);
    }, [id]);

    if (!product) {
      return <div>Product not found</div>;  // Handle case where product is not found
    }

    return (
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex">
          <div className="w-1/2">
            <img className="object-cover h-full w-full" src={product.pic} alt="Product" />
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-bold mb-2">{product.desc}</h2>
            <p className="text-gray-700 text-xl mb-4">₹ {product.price}</p>
            <p className="text-gray-600 mb-4">{product.details}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Chat with seller
            </button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Posted in {product.place}</p>
        </div>
      </div>
    );
  };

  export default Product;
