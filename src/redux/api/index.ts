import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAPIUrl } from './utils'

const baseQuery = fetchBaseQuery({
    baseUrl: getAPIUrl()
})

export const api = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
    tagTypes: [
        'Product'
    ]
})