/* eslint-disable @typescript-eslint/consistent-type-definitions */
import 'reflect-metadata';

import ReactDOM from 'react-dom/client';
import App from './App';

window.Kakao.init('3965165a81fbe4e5f8fb97def9c3a055');

function main() {
	const container = document.getElementById('root');

	if (!container) {
		return;
	}

	const root = ReactDOM.createRoot(container);

	root.render(<App />);
}

main();
