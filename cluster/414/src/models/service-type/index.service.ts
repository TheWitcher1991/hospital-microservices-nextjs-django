import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchCoreQuery } from 'cluster/microfrontends/src/shared/libs'
import { IServiceType } from 'cluster/microfrontends/src/models/service-type/index.types'

export const ServiceTypeApi = createApi({
	reducerPath: 'serviceTypeApi',
	baseQuery: fetchCoreQuery({
		base_url: 'v1/service-types/',
		isAuthorized: false,
	}),
	tagTypes: ['service-types'],
	endpoints: build => ({
		getServiceTypes: build.query<IServiceType[]>({
			query: () => '',
			providesTags: ['service-types'],
		}),
		getServiceTypeById: build.query<IServiceType, number>({
			query: id => `${id}/`,
			providesTags: (result, error, { id }) => [
				{ type: 'service-types', id },
			],
		}),
	}),
})

export const { useGetServiceTypesQuery, useGetServiceTypeByIdQuery } =
	ServiceTypeApi
