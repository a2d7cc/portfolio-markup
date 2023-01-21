const Favicons = () => {
	return (
		<>
			{/* https://iconifier.net/ */}
			<link
				rel="shortcut icon"
				href="/favicons/favicon.png"
				type="image/x-icon"
			/>
			<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
			<link
				rel="apple-touch-icon"
				sizes="72x72"
				href="/favicons/apple-touch-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/favicons/apple-touch-icon-114x114.png"
			/>
		</>
	)
}

export default Favicons
