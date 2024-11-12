import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchCoreQuery } from 'cluster/microfrontends/src/shared/libs'

export const PositionApi = createApi({
	reducerPath: 'positionApi',
	baseQuery: fetchCoreQuery({
		isAuthorized: false,
	}),
	endpoints: build => ({}),
})

export const {} = PositionApi
