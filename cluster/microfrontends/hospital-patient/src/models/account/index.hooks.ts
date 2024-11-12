import { useAppSelector } from 'cluster/microfrontends/src/hooks'

export const useCheckAuth = () => {
	const { isAuthenticated, role } = useAppSelector(state => state.account)

	return {
		role,
		isAuthenticated,
	}
}

export const useAuth = () => useAppSelector(state => state.account)
