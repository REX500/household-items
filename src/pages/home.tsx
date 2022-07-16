// components
import { Box, Typography } from '@mui/material';
import CreateHouseholdItem from '../features/createHouseholdItem/createHouseholdItem';
import HouseholdItemList from '../features/householdItemList/householdItemList';

export default function Home(): JSX.Element {
	return (
		<Box p={2}>
			<Typography variant="h4">Todo List</Typography>

			<Box mt={2}>
				<CreateHouseholdItem />

				<Box mt={2}>
					<HouseholdItemList />
				</Box>
			</Box>
		</Box>
	);
}
