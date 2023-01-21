declare module '*.svg' {
	const content: any
	export default content
}

declare module '*.svg?inline' {
	const content: React.FC<React.SVGProps<SVGSVGElement>>
	export default content
}
