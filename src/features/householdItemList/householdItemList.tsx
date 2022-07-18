// react
import { Fragment, useState } from 'react';

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
	TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

type setPricesType = {
	id: number;
	price: number;
}[];

const HouseholdItemList = (): JSX.Element => {
	const todoList = useRecoilValue(householdItemState);
	const setHouseHoldItem = useSetRecoilState(householdItemState);
	const [itemPriceValues, setItemPriceValues] = useState<setPricesType>([]);

	const removeItem = (itemId: number) => () => {
		setHouseHoldItem((oldItemList) =>
			oldItemList.filter((item) => item.id !== itemId)
		);
	};
	const addPriceToItem = (itemId: number, price: number) => {
		setHouseHoldItem((oldItemList) =>
			oldItemList.map((item) => {
				if (item.id === itemId)
					return {
						...item,
						price,
					};

				return item;
			})
		);
	};
	const setPriceForItem = (itemId: number, price: number) => {
		// price values exists
		const priceValue = itemPriceValues.find(
			(priceValue) => priceValue.id === itemId
		);

		const newPriceValues = priceValue
			? // if price value exists, update it
			  itemPriceValues.map((entry) => {
				if (entry.id === itemId)
					return {
						...entry,
						price,
					};

				return entry;
			  })
			: // if price value doesn't exist, create it
			  [...itemPriceValues, { id: itemId, price }];

		setItemPriceValues(newPriceValues);
	};

	return (
		<Box>
			<List
				sx={{
					maxHeight: 'calc(100vh - 100px)',
					overflowY: 'auto',
				}}
			>
				<Typography variant="h5" textAlign="center">
					Add prices to items
				</Typography>

				<Box mt={2}>
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
										{item.price ? (
											<Box>
												<Typography>{`${item.price ?? ''} DKK`}</Typography>
												<Box ml={1}>
													<IconButton onClick={removeItem(item.id)}>
														<DeleteIcon />
													</IconButton>
												</Box>
											</Box>
										) : (
											<Box>
												<TextField
													label="Price"
													placeholder="Enter price..."
													size="small"
												/>
												<Box ml={1}>
													<IconButton onClick={removeItem(item.id)}>
														<SaveIcon />
													</IconButton>
												</Box>
											</Box>
										)}
									</Box>
								}
							>
								<ListItemText primary={item.name} secondary={item.owner} />
							</ListItem>
							<Divider component="li" />
						</Fragment>
					))}
				</Box>
			</List>
		</Box>
	);
};

export default HouseholdItemList;
