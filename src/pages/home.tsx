import { useState } from 'react';

// components
import { Box, Typography, Button } from '@mui/material';
import CreateHouseholdItem from '../features/createHouseholdItem/createHouseholdItem';
import HouseholdItemList from '../features/householdItemList/householdItemList';

// icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Home(): JSX.Element {
	const [page, setPage] = useState<Pages>('add items');

	const onPageChange = (type: 'next' | 'previous') => {
		if (type === 'next' && page === 'add items') {
			setPage('add price to items');
		} else if (type === 'next' && page === 'add price to items') {
			setPage('assign items to person');
		} else if (type === 'next' && page === 'assign items to person') {
			setPage('view items');
		} else if (type === 'previous' && page === 'view items') {
			setPage('assign items to person');
		} else if (type === 'previous' && page === 'assign items to person') {
			setPage('add price to items');
		} else {
			setPage('add items');
		}
	};

	return (
		<Box p={2}>
			<Typography variant="h4">Todo List</Typography>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					width: '100%',
				}}
			>
				<Button
					onClick={() => onPageChange('previous')}
					variant="contained"
					startIcon={<ArrowBackIosNewIcon />}
					disabled={page === 'add items'}
				>
					Previous
				</Button>
				<Button
					onClick={() => onPageChange('next')}
					endIcon={<NavigateNextIcon />}
					variant="contained"
					disabled={page === 'view items'}
				>
					Next
				</Button>
			</Box>

			<Box mt={8}>
				{page === 'add items' && <CreateHouseholdItem />}
				{page === 'add price to items' && <HouseholdItemList />}

				{/* <Box mt={2}>
					<HouseholdItemList />
				</Box> */}
			</Box>
		</Box>
	);
}
