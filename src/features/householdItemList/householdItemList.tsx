// react
import { Fragment } from 'react';

// recoil stuff
import { useRecoilValue, useSetRecoilState } from 'recoil';
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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const HouseholdItemList = (): JSX.Element => {
	const todoList = useRecoilValue(householdItemState);
	const setHouseHoldItem = useSetRecoilState(householdItemState);

	const removeItem = (itemId: number) => () => {
		setHouseHoldItem((oldItemList) =>
			oldItemList.filter((item) => item.id !== itemId)
		);
	};

	return (
		<Box>
			<List
				sx={{
					maxHeight: 'calc(100vh - 100px)',
					overflowY: 'auto',
				}}
			>
				{todoList.map((item) => (
					<Fragment key={item.id}>
						<ListItem
							secondaryAction={
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Typography>{`${item.price ?? ''} DKK`}</Typography>
									<IconButton onClick={removeItem(item.id)}>
										<DeleteIcon />
									</IconButton>
								</Box>
							}
						>
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
