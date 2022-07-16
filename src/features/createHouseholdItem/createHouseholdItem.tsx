import { useState } from 'react';

// recoil
import { useSetRecoilState } from 'recoil';
import { householdItemState } from '../../store/items';

// components
import { TextField, Button, Box, Autocomplete } from '@mui/material';

type ownerTypes = 'Filip' | 'Eva' | 'Martine' | 'Filip and Eva';

const CreateHouseholdItem = (): JSX.Element => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [owner, setOwner] = useState<ownerTypes | null>(null);
	const setHouseHoldItem = useSetRecoilState(householdItemState);

	const onClick = () => {
		if (addButtonDisabled) return;

		setHouseHoldItem((oldItemList) => [
			...oldItemList,
			{
				name,
				price,
				owner,
			},
		]);
		setName('');
		setPrice(0);
		setOwner(null);
	};

	const addButtonDisabled = name === '' || price === 0 || owner === null;

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<TextField
				label="Item"
				placeholder="Enter item..."
				value={name}
				size="small"
				onChange={(e) => setName(e.target.value)}
			/>
			<Box ml={1}>
				<TextField
					label="Price"
					placeholder="Enter price..."
					type="number"
					value={price}
					size="small"
					onChange={(e) => setPrice(Number(e.target.value))}
				/>
			</Box>
			<Box ml={1}>
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
								width: '180px',
							}}
							label="Owner"
							placeholder="Enter owner..."
							size="small"
						/>
					)}
				/>
			</Box>

			<Box ml={1}>
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
