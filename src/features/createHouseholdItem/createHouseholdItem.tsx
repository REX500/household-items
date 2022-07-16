import { useState } from 'react';

// recoil
import { useSetRecoilState } from 'recoil';
import { householdItemState } from '../../store/items';

// components
import { TextField, Button, Box, Autocomplete } from '@mui/material';

type ownerTypes = 'Filip' | 'Eva' | 'Martine' | 'Filip and Eva' | 'Unknown';

// utility for creating unique Id
let id = 0;
const CreateHouseholdItem = (): JSX.Element => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState<number | undefined>(undefined);
	const [owner, setOwner] = useState<ownerTypes | null>(null);
	const setHouseHoldItem = useSetRecoilState(householdItemState);

	const onClick = () => {
		if (addButtonDisabled) return;

		setHouseHoldItem((oldItemList) => [
			...oldItemList,
			{
				id: getId(),
				name,
				price: price ?? null,
				owner: owner ?? null,
			},
		]);
		setName('');
		setPrice(0);
		setOwner(null);
	};

	const getId = () => {
		return id++;
	};

	const addButtonDisabled = name === '';

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<TextField
				sx={{
					width: '280px',
				}}
				label="Item"
				placeholder="Enter item..."
				value={name}
				size="small"
				onChange={(e) => setName(e.target.value)}
			/>
			<Box mt={1}>
				<TextField
					sx={{
						width: '280px',
					}}
					label="Price"
					placeholder="Enter price..."
					type="number"
					value={price}
					size="small"
					onChange={(e) => setPrice(Number(e.target.value))}
				/>
			</Box>
			<Box mt={1}>
				<Autocomplete
					options={['Filip', 'Eva', 'Martine', 'Filip and Eva'] as ownerTypes[]}
					value={owner}
					isOptionEqualToValue={(option, value) => option === value}
					onChange={(e, value) => setOwner(value)}
					filterSelectedOptions
					renderInput={(params) => (
						<TextField
							{...params}
							sx={{
								width: '280px',
							}}
							label="Owner"
							placeholder="Enter owner..."
							size="small"
						/>
					)}
				/>
			</Box>

			<Box mt={1}>
				<Button
					variant="contained"
					color="primary"
					onClick={onClick}
					disabled={addButtonDisabled}
				>
					Add
				</Button>
			</Box>
		</Box>
	);
};

export default CreateHouseholdItem;
