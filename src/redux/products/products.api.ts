import { api } from "../api";

export const productsApi = api.injectEndpoints({
    endpoints: build => ({
        GETAllProducts: build.query({
            query: () => ({
                url: 'data/GETAllProducts_mock.json'
            }),
            providesTags: [{ type: 'Product' }]
        })
    })
});

export const {
    useGETAllProductsQuery
} = productsApi