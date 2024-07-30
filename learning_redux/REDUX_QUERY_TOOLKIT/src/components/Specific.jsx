import React from 'react'
import { useGetAllProductsByIdQuery } from '../app/service/dummyData'
import { useState } from 'react';

const Specific = () => {
    const [getProducts, setGetProducts] = useState()

    const { data, isError, isLoading } = useGetAllProductsByIdQuery(getProducts);
    console.log(data)

    return (
        <div>
            <h1>{data?.brand}</h1>
            <form>
                <input type="number" placeholder='TEST' onChange={(e) => { setGetProducts(e.target.value) }} />
                <button type='submit'></button>
            </form>
        </div>
    )
}

export default Specific