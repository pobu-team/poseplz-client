import { useReadLocalStorage } from 'usehooks-ts';
import ErrorAnnouncement from '../components/common/ErrorAnnouncement';

export default function ErrorPage() {
  const isDarkMode = useReadLocalStorage('darkMode');

  return (
    <ErrorAnnouncement>
      <object
        data="/images/img_error.svg"
        aria-label="error"
      />
      <h2>일시적인 오류입니다.</h2>
      <p>잠시 후에 다시 시도해 주세요.</p>
      <button
        type="button"
        onClick={() => {
          window.location.reload();
        }}
      >
        <object
          data={isDarkMode ? '/images/replay_D.svg' : '/images/replay_L.svg'}
          aria-label="refresh"
        />
      </button>
    </ErrorAnnouncement>
  );
}
