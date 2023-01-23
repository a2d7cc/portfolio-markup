import Meta from 'providers/meta/Meta'
import { FC } from 'react'

import logoIcon from '@/assets/images/logo.svg'

import { IHome } from './home.interface'
import styles from './home.module.scss'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Portfolio"
			description="Welcome to my personal developer website!"
		>
			<header id={styles.header}>
				<div className={styles.container}>
					<div className={styles.inner_header}>
						<a href="/" className={styles.logo}>
							<img src={logoIcon.src} alt="Logo icon" />
						</a>
						<div className={styles.right_side_header}>
							<ul className={styles.mnu_top}>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Pricing</a>
								</li>
								<li>
									<a href="#">Contact Us</a>
								</li>
								<li>
									<a href="#">Login</a>
								</li>
							</ul>
							<a href="#" className={styles.btn_simple}>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</header>
		</Meta>
	)
}

export default Home
