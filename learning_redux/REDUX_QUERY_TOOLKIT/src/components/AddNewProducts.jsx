import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'

const AddNewProducts = () => {
    //To actually use the POST method we need to destructure the array of products from the API
    const [addNewProducts, { data, isLoading, isError }] = useAddNewProductMutation()

    if (isError) {
        return <div>Error adding product</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleAddProduct = async () => {
        try {
            const newproductData = {
                id: 1,
                title: "LAMAW",
                description: "Product added"
            };

            await addNewProducts(newproductData);

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <h1>{data?.id}</h1>
            <h1>{data?.title}</h1>
            <h1>{data?.description}</h1>
            <button onClick={handleAddProduct} disabled={isLoading}>Add new product</button>
        </>
    )
}

export default AddNewProducts