// recoil stuff
import { useRecoilValue } from 'recoil';
import { todoListState } from '../store/items';

// components
import {
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import CreateTodo from 'features/createTodo/createTodo';

export default function Home(): JSX.Element {
	const todoList = useRecoilValue(todoListState);

	return (
		<Box>
			<Typography variant="h4">Todo List</Typography>
			<CreateTodo />
			<List>
				{todoList.map((item, index) => (
					<ListItem
						key={index}
						secondaryAction={<Typography>{item.price}</Typography>}
					>
						<ListItemText primary={item.name} secondary={item.owner} />
					</ListItem>
				))}
			</List>
		</Box>
	);
}
