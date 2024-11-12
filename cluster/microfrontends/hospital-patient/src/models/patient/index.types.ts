import {
	ICreateUser,
	IUpdateUser,
	IUser,
} from 'cluster/microfrontends/src/models/account'
import { IPatientType } from 'cluster/microfrontends/src/models/patient-type'

export interface IBasePatient {
	address: string
	oms: string
	snils: string
	inn: string
	passport: string
}

export interface IPatient extends IBasePatient {
	id: number
	user: IUser
	patient_type: IPatientType
}

export interface IUpdatePatient extends IBasePatient {
	user: IUpdateUser
}

export interface ICreatePatient extends IBasePatient {
	user: ICreateUser
}
