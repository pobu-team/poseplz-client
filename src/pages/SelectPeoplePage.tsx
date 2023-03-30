import SelectPeople from '../components/select/SelectPeople';
import moveHome from '../utils/moveHome';

export default function SelectPeoplePage() {
	moveHome();

	return (
		<SelectPeople />
	);
}
