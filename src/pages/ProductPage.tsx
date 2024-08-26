import products from '@/helpers/products';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';



type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
};

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

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

    return (
        <div className=' lg:h-[100vh] w-full pt-[120px] lg:pt-[180px]'>
            <div className=' w-[95%] m-auto flex flex-col lg:flex-row items-start justify-between mb-10'>
                <img src={product.image} alt="" className=' w-full lg:w-[45%] border border-slate-300 mb-6' />
                <div className=' w-full lg:w-[45%] text-left'>
                    <h1 className=' font-semibold text-3xl mb-4'>{product.name}</h1>
                    <p className=' text-xl mb-4'>{product.description}</p>
                    <h1 className=' text-green-700 font-semibold text-5xl mb-6'>{product.price}</h1>
                    <Link
                        to={`/product/${product.id}`}
                        className=' mt-5 px-11 text-center bg-green-600 text-white text-s py-4 uppercase duration-500 hover:px-28'
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
