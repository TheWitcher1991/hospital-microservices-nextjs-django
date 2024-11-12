import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'cluster/microfrontends/src/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
