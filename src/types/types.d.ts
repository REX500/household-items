declare module 'store/*';
declare module 'types/*';
declare module 'features/*';
declare module 'pages/*';

type SelectOption = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value: number | string | { [key: string]: any };
	label: string;
};

type SelectSize = 'small' | 'medium';

type Pages =
	| 'add items'
	| 'add price to items'
	| 'assign items to person'
	| 'view items';
