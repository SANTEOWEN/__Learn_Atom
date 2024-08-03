import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    //This the name of the slice
    reducerPath: "Products",

    //This is the base path for all the data sources
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({

        //query method is used to get the data from the endpoint
        getAllProducts: builder.query({
            query: () => "/products"
        }),

        getAllProductsById: builder.query({
            query: (id) => `/products/${id}`
        }),

        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/products/add",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: newProduct
            })
        }),

        updateProduct: builder.mutation({
            query: (id, updatedProduct) => ({
                url: `/products/${id}`,
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: updatedProduct
            })
        }),

        deleteProduc: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            })
        })
    })
})

//If the method that we use is like only fetching data we use use${nameofquerymethodthatyoucraeted}Query
//and if it is mutating methods like edit, delete and add we will be using use${nameofquerymethodthatyoucraeted}Mutation


export const { useGetAllProductsQuery, useGetAllProductsByIdQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProducMutation } = productsApi
