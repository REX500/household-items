import { useState } from 'react';

// components
import { TextField, Button, Box } from '@mui/material';

const CreateTodo = (): JSX.Element => {
	const [itemValue, setItemValue] = useState('');

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
				value={itemValue}
				size="small"
				onChange={(e) => setItemValue(e.target.value)}
			/>

			<Box ml={1}>
				<Button variant="contained" color="primary">
					Add
				</Button>
			</Box>
		</Box>
	);
};

export default CreateTodo;
