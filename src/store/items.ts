import { atom } from 'recoil';

interface Item {
	id: number;
	name: string;
	price: number | null;
	owner: 'Filip' | 'Eva' | 'Martine' | 'Filip and Eva' | 'Unknown' | null;
}

const householdItemState = atom({
	key: 'TodoList',
	default: [] as Item[],
});

export { householdItemState };
