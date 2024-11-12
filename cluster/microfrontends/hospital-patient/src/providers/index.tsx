import { FC, PropsWithChildren } from 'react'
import WithProgressBar from 'cluster/microfrontends/src/providers/with-progress-bar'
import WithStore from 'cluster/microfrontends/src/providers/with-store'
import WithPersist from 'cluster/microfrontends/src/providers/with-persist'
import WithToastr from 'cluster/microfrontends/src/providers/with-toastr'

const WithProviders: FC<PropsWithChildren> = ({ children }) => {
	return (
		<WithProgressBar>
			<WithStore>{children}</WithStore>
		</WithProgressBar>
	)
}

export default WithProviders
