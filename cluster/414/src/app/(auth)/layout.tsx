import { ReactNode } from 'react'
import { Card, Container, Spacing } from 'cluster/microfrontends/src/shared/ui'

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<Container>
			<Spacing v={'ml'} />
			<Card>{children}</Card>
		</Container>
	)
}
