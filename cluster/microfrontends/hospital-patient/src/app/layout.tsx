import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { Root } from 'cluster/microfrontends/src/shared/ui'
import Header from 'cluster/microfrontends/src/widgets/header'
import Footer from 'cluster/microfrontends/src/widgets/footer'
import WithProviders from 'cluster/microfrontends/src/providers'
import '@mdi/font/css/materialdesignicons.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'cluster/microfrontends/src/shared/css/global.css'

const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'СМИС',
	description: "Fullstack application of the polyclinic registrar's office",
	robots: 'index, follow',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='ru' dir='ltr' theme='light'>
			<body className={inter.className}>
				<WithProviders>
					<Root>
						<Header />
						{children}
						<Footer />
					</Root>
				</WithProviders>
			</body>
		</html>
	)
}
