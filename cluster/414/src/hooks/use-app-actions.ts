import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { AppActions } from 'cluster/microfrontends/src/store'
import { useAppDispatch } from 'cluster/microfrontends/src/hooks/use-app-dispatch'

export const useAppActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(AppActions, dispatch), [dispatch])
}
