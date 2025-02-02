import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { ProductData, ProductDetailProps } from '../types/product'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params =useParams<{id:string}>()
    const { data: product, isLoading, error } = useQuery({
        queryKey: ["post", params.id],
        queryFn: async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            if (!response.ok) throw new Error("Error fetching data");
            return response.json() as unknown as ProductData
        },
        staleTime:10000
    })

    if (isLoading) return <p>Loading....</p>
    if (error) return <p>Error occured: {error.message}</p>

    return (
        <div>
            <h3><Link to='/product'>Back</Link></h3>
            <h2>ProductDetails</h2>
            <div className="card">
                <img src={product?.image} alt="Avatar" />
                <div className="container">
                    <h4><b>{product?.title}</b></h4>
                    <p>{product?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails