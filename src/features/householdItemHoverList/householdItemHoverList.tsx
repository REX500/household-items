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
	Paper,
} from '@mui/material';

const HouseholdItemHoverList = (): JSX.Element | null => {
	const todoList = useRecoilValue(householdItemState);

	return todoList.length > 0 ? (
		<Paper
			sx={{
				position: 'absolute',
				top: 0,
				right: 0,
				padding: 2,
			}}
			elevation={2}
		>
			<Typography variant="h6">Added household items</Typography>

			<Box mt={2}>
				<List
					sx={{
						minWidth: '200px',
						maxHeight: 300,
						overflowY: 'auto',
					}}
				>
					{todoList.map((item, index) => (
						<Fragment key={item.id}>
							<ListItem>
								<ListItemText
									primary={`${index + 1}. ${item.name}`}
									secondary={item.owner}
								/>
							</ListItem>
							<Divider component="li" />
						</Fragment>
					))}
				</List>
			</Box>
		</Paper>
	) : null;
};

export default HouseholdItemHoverList;
