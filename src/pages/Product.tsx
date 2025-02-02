import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ProductData } from '../types/product';


const Product = () => {
    const { data: products, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) throw new Error("Error fetching data");
            return response.json()
        },
        staleTime:10000
    })

    if (isLoading) return <p>Loading....</p>
    if (error) return <p>Error occured: {error.message}</p>

    return (
        <>
            {
                products && products.map((product: ProductData) => (
                    <div className="card">
                        <img src={product.image} alt="Avatar" />
                        <div className="container">
                            <h4><b>{product.title}</b></h4>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Product