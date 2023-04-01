import {useNavigate} from 'react-router';

import {useSearchParams} from 'react-router-dom';

import PoseDetail from '../components/detail/PoseDetail';

import moveHome from '../utils/moveHome';

export default function PoseDetailPage() {
	moveHome();

	const navigate = useNavigate();

	const [searchParams] = useSearchParams();

	const imageSrc = searchParams.get('imageSrc') ?? undefined;

	const handleClickBack = () => {
		navigate('/people');
	};

	return (
		<PoseDetail
			imageSrc={imageSrc}
			onClickBack={handleClickBack}
		/>
	);
}
