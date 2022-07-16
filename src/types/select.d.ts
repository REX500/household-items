type SelectOption = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value: number | string | { [key: string]: any }
	label: string
}

type SelectSize = 'small' | 'medium'

export { SelectOption, SelectSize }
