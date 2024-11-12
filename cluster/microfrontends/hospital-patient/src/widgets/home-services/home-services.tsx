import { FC } from 'react'
import styles from './home-services.module.css'
import { Container } from 'cluster/microfrontends/src/shared/ui'

export const HomeServices: FC = () => {
	return (
		<div className={styles.home__services}>
			<Container>HomeServices</Container>
		</div>
	)
}
