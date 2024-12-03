"use client";
import products from '@/helpers/products';
import { addToCart } from '@/store/audophileSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
};

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            // Convert id from string to number
            const productId = parseInt(id, 10);

            // Access the items array and use find to get the specific product
            const foundProduct = products.items.find((p) => p.id === productId);
            setProduct(foundProduct || null);
        }
    }, [id]);



    if (!product) {
        return <p>Product not found</p>;
    }

    const handleAddToCart = () => {
        const CartItem = {
            id: product.id,
            img: product.image,
            name: product.name,
            price: product.price,
            quantity: 1, // Start with a quantity of 1
        };

        // Dispatch the action to add the product to the cart
        dispatch(addToCart(CartItem));
    };

    return (
        <div className=' lg:h-[100vh] w-full pt-[120px] lg:pt-[180px] pb-8'>
            <div className=' w-[95%] m-auto flex flex-col lg:flex-row items-start justify-between mb-10'>
                <img src={product.image} alt="" className=' w-full lg:w-[45%] border border-slate-300 mb-6' />
                <div className=' w-full lg:w-[45%] text-left'>
                    <h1 className=' font-semibold text-3xl mb-4'>{product.name}</h1>
                    <p className=' text-xl mb-4'>{product.description}</p>
                    <h1 className=' text-green-700 font-semibold text-5xl mb-6'>
                        £ {product.price.toFixed(2)}
                    </h1>
                    <button
                        onClick={handleAddToCart}
                        className=' mt-5 px-11 text-center bg-green-600 text-white text-s py-4 uppercase duration-500 hover:bg-green-500'
                    >
                        + Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
