// react
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
} from '@mui/material';

const HouseholdItemList = (): JSX.Element => {
	const todoList = useRecoilValue(householdItemState);

	return (
		<Box>
			<List>
				{todoList.map((item, index) => (
					<Fragment key={index}>
						<ListItem secondaryAction={<Typography>{item.price}</Typography>}>
							<ListItemText primary={item.name} secondary={item.owner} />
						</ListItem>
						<Divider component="li" />
					</Fragment>
				))}
			</List>
		</Box>
	);
};

export default HouseholdItemList;
