import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchCoreQuery } from 'cluster/microfrontends/src/shared/libs'

export const EmployeeApi = createApi({
	reducerPath: 'employeeApi',
	baseQuery: fetchCoreQuery({
		isAuthorized: true,
	}),
	endpoints: build => ({}),
})

export const {} = EmployeeApi
