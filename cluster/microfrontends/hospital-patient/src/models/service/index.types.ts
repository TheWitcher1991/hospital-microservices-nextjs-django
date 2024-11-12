import { IServiceType } from 'cluster/microfrontends/src/models/service-type'

export interface IService {
	id: number
	name: string
	price: string
	employee: number
	service_type: IServiceType
}

export interface ServiceState {
	count: number
	services: IService[]
}
