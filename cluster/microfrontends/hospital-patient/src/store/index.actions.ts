import { accountActions } from 'cluster/microfrontends/src/models/account'
import { serviceTypeActions } from 'cluster/microfrontends/src/models/service-type'
import { serviceActions } from 'cluster/microfrontends/src/models/service'
import { authActions } from 'cluster/microfrontends/src/models/auth'

export const AppActions = {
	...accountActions,
	...serviceActions,
	...serviceTypeActions,
	...authActions,
}
