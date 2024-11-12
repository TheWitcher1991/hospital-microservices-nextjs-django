import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCore } from 'cluster/microfrontends/src/shared/libs'
import {
	ILogin,
	ILoginReturn,
} from 'cluster/microfrontends/src/models/auth/index.types'
import { toastr } from 'react-redux-toastr'
import { ICreatePatient } from 'cluster/microfrontends/src/models/patient'
import { ICreateEmployee } from 'cluster/microfrontends/src/models/employee'
import { toastError } from 'cluster/microfrontends/src/shared/utils'

export const signupPatient = createAsyncThunk<boolean, ICreatePatient>(
	'signup/patient',
	async (data, thunkApi) => {
		try {
			await fetchCore({
				url: 'v1/register/',
				method: 'POST',
				body: data,
			})
			toastr.success('Регистрация', 'Успешно выполнена')
			return true
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	},
)

export const signupEmployee = createAsyncThunk<boolean, ICreateEmployee>(
	'signup/employee',
	async (data, thunkApi) => {
		try {
			await fetchCore({
				url: 'v1/register/',
				method: 'POST',
				body: data,
			})
			toastr.success('Регистрация', 'Успешно выполнена')
			return true
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	},
)

export const login = createAsyncThunk<ILoginReturn, ILogin>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await fetchCore({
				url: 'v1/login/',
				method: 'POST',
				body: data,
			})
			toastr.success('Вход', 'Успешно выполнен')
			return (await response.json()) as ILoginReturn[]
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	},
)

export const logout = createAsyncThunk('auth/logout', async () => {
	return {}
})
