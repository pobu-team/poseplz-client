import React from 'react';
import ReactDOM from 'react-dom/client';

import { RecoilRoot } from 'recoil';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Loading from './components/common/Loading';

window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY ?? '');
const queryClient = new QueryClient();

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }
  const root = ReactDOM.createRoot(container);

  root.render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <React.Suspense fallback={<Loading />}>
          <App />
        </React.Suspense>
      </QueryClientProvider>
    </RecoilRoot>,
  );
}

main();
