import { Fragment } from 'react';

// recoil stuff
import { useRecoilValue } from 'recoil';
import { householdItemState } from '../../store/items';

// components
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	Divider,
	IconButton,
	Paper,
} from '@mui/material';

const HouseholdItemHoverList = (): JSX.Element => {
	const todoList = useRecoilValue(householdItemState);

	return (
		<Paper
			sx={{
				position: 'absolute',
				top: 0,
				right: 0,
				padding: 2,
			}}
		>
			<List
				sx={{
					minWidth: '200px',
				}}
			>
				{todoList.map((item) => (
					<Fragment key={item.id}>
						<ListItem>
							<ListItemText primary={item.name} secondary={item.owner} />
						</ListItem>
						<Divider component="li" />
					</Fragment>
				))}
			</List>
		</Paper>
	);
};

export default HouseholdItemHoverList;
