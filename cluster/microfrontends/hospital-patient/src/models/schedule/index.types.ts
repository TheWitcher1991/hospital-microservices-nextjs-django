import { IShift } from 'cluster/microfrontends/src/models/shift'
import { IEmployee } from 'cluster/microfrontends/src/models/employee'

export interface ISchedule {
	id: number
	date: string
	shift: IShift
	employee: IEmployee
}
