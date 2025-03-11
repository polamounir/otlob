import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    endpoints : (builder) =>({
        login: builder.mutation<{user : any} , {email: string; password: string}> ({
            query: (credentials) => ({
                method: "POST",
                url: "/api/login",
                // body: JSON.stringify(credentials)
                body: credentials,
                // credentials
                headers: {
                    "Content-Type": "application/json"
                },
                credentials : "include"
            })
        })
    })

})