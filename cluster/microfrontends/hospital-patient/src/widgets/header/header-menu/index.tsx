'use client'

import { FC } from 'react'
import { useCheckAuth } from 'cluster/microfrontends/src/models/account'
import styles from './index.module.css'
import { HeaderMenuList } from 'cluster/microfrontends/src/widgets/header/header-menu/header-menu-list'
import { guestRoutes } from 'cluster/microfrontends/src/widgets/header/header-menu/index.utils'

export const HeaderMenu: FC = () => {
	const { isAuthenticated, role } = useCheckAuth()

	return (
		<ul className={styles.header__menu}>
			{!isAuthenticated && <HeaderMenuList menu={guestRoutes} />}
		</ul>
	)
}
