import { AppStore } from 'cluster/microfrontends/src/store'
import { useStore } from 'react-redux'

export const useAppStore = () => useStore<AppStore>()
