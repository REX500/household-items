import { atom } from 'recoil';

interface Item {
	name: string;
	price: number;
	owner: 'Filip' | 'Eva' | 'Martine' | 'Filip and Eva';
}

const householdItemState = atom({
	key: 'TodoList',
	default: [] as Item[],
});

export { householdItemState };
