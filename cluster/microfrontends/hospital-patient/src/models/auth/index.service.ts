import { createApi } from '@reduxjs/toolkit/query/react'
import {
	ILogin,
	ILoginReturn,
} from 'cluster/microfrontends/src/models/auth/index.types'
import { fetchCoreQuery } from 'cluster/microfrontends/src/shared/libs'

export const AuthApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchCoreQuery({
		isAuthorized: false,
	}),
	endpoints: build => ({
		login: build.mutation<ILoginReturn, ILogin>({
			query: data => ({
				url: 'login/',
				method: 'POST',
				body: data,
			}),
		}),
		logout: build.mutation({
			query: () => ({
				url: 'logout/',
				method: 'POST',
			}),
		}),
	}),
})

export const { useLogoutMutation, useLoginMutation } = AuthApi
