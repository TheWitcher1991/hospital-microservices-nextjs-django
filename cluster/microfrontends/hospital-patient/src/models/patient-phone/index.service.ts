import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchCoreQuery } from 'cluster/microfrontends/src/shared/libs'

export const PatientPhoneApi = createApi({
	reducerPath: 'patientPhoneApi',
	baseQuery: fetchCoreQuery({
		isAuthorized: true,
	}),
	endpoints: build => ({}),
})

export const {} = PatientPhoneApi
