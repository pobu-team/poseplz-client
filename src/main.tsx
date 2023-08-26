import React from 'react';
import ReactDOM from 'react-dom/client';

import { RecoilRoot } from 'recoil';

import App from './App';
import Loading from './components/common/Loading';

window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY ?? '');

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
