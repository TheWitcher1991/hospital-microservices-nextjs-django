import {
	ICreateUser,
	IUpdateUser,
	IUser,
} from 'cluster/microfrontends/src/models/account'
import { ICabinet } from 'cluster/microfrontends/src/models/cabinet'
import { IPosition } from 'cluster/microfrontends/src/models/position'

export interface IEmployee {
	id: number
	user: IUser
	cabinet: ICabinet
	position: IPosition
}

export interface IUpdateEmployee {
	user: IUpdateUser
	cabinet: number
	position: number
}

export interface ICreateEmployee {
	user: ICreateUser
	cabinet: number
	position: number
}
