import { FC } from 'react'
import Link from 'next/link'
import { Icon } from 'cluster/microfrontends/src/shared/ui/index'
import styles from './index.module.css'

export const Logo: FC = () => {
	return (
		<Link href={'/'} className={styles.logo}>
			<Icon label={'pill'} />
			<span>СМИС</span>
		</Link>
	)
}
