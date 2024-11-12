import { AppDispatch } from 'cluster/microfrontends/src/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
