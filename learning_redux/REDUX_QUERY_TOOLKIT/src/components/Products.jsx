import React from 'react'
import { useGetAllProductsQuery, useGetAllProductsByIdQuery } from '../app/service/dummyData'


const Products = () => {
    const { data, isError, isLoading } = useGetAllProductsQuery();

    console.log(data)

    if (isError) {
        return <div>Error fetching products</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>{data?.products.map((p) => (
                <>
                    <h1 key={p.id}>{p.title}</h1>
                    <p>{p.description}</p>
                </>

            ))}
            </div>
            <div>
                <form >
                    <input type="text" />
                    <button type='submit'>

                    </button>
                </form>
            </div>



        </>
    )
}

export default Products