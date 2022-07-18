import { atom } from 'recoil';

const householdItemState = atom({
	key: 'TodoList',
	default: [] as Item[],
});

export { householdItemState };
