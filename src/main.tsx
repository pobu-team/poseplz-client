import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import React from 'react';
import App from './App';
import Loading from './components/common/Loading';

window.Kakao.init('3965165a81fbe4e5f8fb97def9c3a055');

function main() {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);

  root.render(
    <RecoilRoot>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </RecoilRoot>,
  );
}

main();
