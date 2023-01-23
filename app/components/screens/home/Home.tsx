import Image from 'next/image'
import Meta from 'providers/meta/Meta'
import { FC } from 'react'

import Logo from '@/assets/images/logo.svg?inline'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Portfolio"
			description="Welcome to my personal developer website!"
		>
			<h1>Home</h1>
		</Meta>
	)
}

export default Home
