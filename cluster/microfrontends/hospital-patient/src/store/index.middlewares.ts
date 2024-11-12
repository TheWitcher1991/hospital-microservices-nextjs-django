import { Middleware, MiddlewareAPI } from 'redux'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { AuthApi } from 'cluster/microfrontends/src/models/auth'
import { ServiceApi } from 'cluster/microfrontends/src/models/service'
import { ServiceTypeApi } from 'cluster/microfrontends/src/models/service-type'
import { EmployeeApi } from 'cluster/microfrontends/src/models/employee'
import { CabinetApi } from 'cluster/microfrontends/src/models/cabinet'
import { PositionApi } from 'cluster/microfrontends/src/models/position'
import { ShiftApi } from 'cluster/microfrontends/src/models/shift'
import { ScheduleApi } from 'cluster/microfrontends/src/models/schedule'
import { PatientTypeApi } from 'cluster/microfrontends/src/models/patient-type'
import { PatientApi } from 'cluster/microfrontends/src/models/patient'
import { PatientCartApi } from 'cluster/microfrontends/src/models/patient-cart'
import { PatientPhoneApi } from 'cluster/microfrontends/src/models/patient-phone'
import { PatientSignatureApi } from 'cluster/microfrontends/src/models/patient-signature'
import { PatientBalanceApi } from 'cluster/microfrontends/src/models/patient-balance'
import { PatientInvoiceApi } from 'cluster/microfrontends/src/models/patient-invoice'
import { PatientTransactionApi } from 'cluster/microfrontends/src/models/patient-transaction'
import { AgreementApi } from 'cluster/microfrontends/src/models/agreement'
import { TalonApi } from 'cluster/microfrontends/src/models/talon'

export const AppMiddlewares = [
	AuthApi.middleware,
	ServiceApi.middleware,
	ServiceTypeApi.middleware,
	EmployeeApi.middleware,
	CabinetApi.middleware,
	PositionApi.middleware,
	ShiftApi.middleware,
	ScheduleApi.middleware,
	PatientTypeApi.middleware,
	PatientApi.middleware,
	PatientCartApi.middleware,
	PatientPhoneApi.middleware,
	PatientSignatureApi.middleware,
	PatientBalanceApi.middleware,
	PatientInvoiceApi.middleware,
	PatientTransactionApi.middleware,
	AgreementApi.middleware,
	TalonApi.middleware,
]

export const RTKQueryErrorLoggerMiddleware: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			console.error(action.error, 'RTK Query Error')
		}

		return next(action)
	}
