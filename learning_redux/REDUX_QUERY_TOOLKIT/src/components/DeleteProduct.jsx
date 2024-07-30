import React from 'react'
import { useDeleteProducMutation } from '../app/service/dummyData'


export const DeleteProduct = ({ productID }) => {
    const [DeleteProduct, { data, isError, isLoading }] = useDeleteProducMutation()

    if (isError) {
        return <div>Error deleting product</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleDelete = async () => {
        try {
            await DeleteProduct(productID)
        } catch (err) {
            console.error('Error deleting product:', err)
        }

    };

    return (
        <>
            <h1>{data?.title ? `${data?.title} lamaw deleted` : ""}</h1>
            <button onClick={handleDelete}>test</button>

        </>
    )
}
