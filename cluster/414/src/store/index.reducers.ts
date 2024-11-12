import { combineReducers } from '@reduxjs/toolkit'
import { accountReducer } from 'cluster/microfrontends/src/models/account'
import { AuthApi, authReducer } from 'cluster/microfrontends/src/models/auth'
import { ServiceApi } from 'cluster/microfrontends/src/models/service'
import {
	ServiceTypeApi,
	serviceTypeReducer,
} from 'cluster/microfrontends/src/models/service-type'
import { serviceReducer } from 'cluster/microfrontends/src/models/service'
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
import { reducer as toastrReducer } from 'react-redux-toastr'

export const RootReducer = combineReducers({
	account: accountReducer,
	auth: authReducer,
	service: serviceReducer,
	serviceType: serviceTypeReducer,
	[AuthApi.reducerPath]: AuthApi.reducer,
	[ServiceApi.reducerPath]: ServiceApi.reducer,
	[ServiceTypeApi.reducerPath]: ServiceTypeApi.reducer,
	[EmployeeApi.reducerPath]: EmployeeApi.reducer,
	[CabinetApi.reducerPath]: CabinetApi.reducer,
	[PositionApi.reducerPath]: PositionApi.reducer,
	[ShiftApi.reducerPath]: ShiftApi.reducer,
	[ScheduleApi.reducerPath]: ScheduleApi.reducer,
	[PatientTypeApi.reducerPath]: PatientTypeApi.reducer,
	[PatientApi.reducerPath]: PatientApi.reducer,
	[PatientCartApi.reducerPath]: PatientCartApi.reducer,
	[PatientPhoneApi.reducerPath]: PatientPhoneApi.reducer,
	[PatientSignatureApi.reducerPath]: PatientSignatureApi.reducer,
	[PatientBalanceApi.reducerPath]: PatientBalanceApi.reducer,
	[PatientInvoiceApi.reducerPath]: PatientInvoiceApi.reducer,
	[PatientTransactionApi.reducerPath]: PatientTransactionApi,
	[AgreementApi.reducerPath]: AgreementApi.reducer,
	[TalonApi.reducerPath]: TalonApi.reducer,
	toastr: toastrReducer,
})
