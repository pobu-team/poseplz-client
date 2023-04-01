import ReactDOM from 'react-dom/client';
import App from './App';

window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);

function main() {
	const container = document.getElementById('root');

	if (!container) {
		return;
	}

	const root = ReactDOM.createRoot(container);

	root.render(<App />);
}

main();
