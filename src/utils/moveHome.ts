import {useEffect} from 'react';
import {useNavigate} from 'react-router';

export default function moveHome() {
	const navigate = useNavigate();
	const preventClose = (e: BeforeUnloadEvent) => {
		e.preventDefault();
		e.returnValue = '';
	};

	const reLoad = () => {
		navigate('/');
	};

	useEffect(() => {
		(() => {
			window.addEventListener('beforeunload', preventClose);
			window.addEventListener('load', reLoad);
		})();

		return () => {
			window.removeEventListener('beforeunload', preventClose);
			window.addEventListener('load', reLoad);
		};
	}, []);
}
