import Image from 'next/image'
import Meta from 'providers/meta/Meta'
import { FC } from 'react'

import LogoIcon from './LogoIcon'
import NewIcon from './NewIcon'
import { IHome } from './home.interface'
import logo from './logo.svg'
import Logo from './logo.svg?inline'

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
