import { FC, PropsWithChildren } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from 'cluster/microfrontends/src/store'

const WithPersist: FC<PropsWithChildren> = ({ children }) => {
	return (
		<PersistGate loading={null} persistor={persistor}>
			{children}
		</PersistGate>
	)
}

export default WithPersist
