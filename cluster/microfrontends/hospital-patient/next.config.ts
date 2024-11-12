import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	output: 'standalone',
	env: {
		API_URL: process.env.API_URL,
		API_VERSION: process.env.API_VERSION,
		WS_URL: process.env.WS_URL,
	},
	images: {
		domains: ['https://www.minobrnauki.gov.ru/', 'localhost'],
	},
	async rewrites() {
		return [
			{
				source: '/api/core/:path*',
				destination: 'http://localhost:8000/api/:path*',
			},
			{
				source: '/api/patient/:path*',
				destination: 'http://localhost:8001/api/:path*',
			},
			{
				source: '/api/employee/:path*',
				destination: 'http://localhost:8002/api/:path*',
			},
			{
				source: '/api/business/:path*',
				destination: 'http://localhost:8003/api/:path*',
			},
		]
	},
}

export default nextConfig
