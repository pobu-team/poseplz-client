import ReadyIcon from '../components/svg/ReadyIcon';
import ErrorAnnouncement from '../components/common/ErrorAnnouncement';

export default function SearchPage() {
  return (
    <ErrorAnnouncement>
      <ReadyIcon />
      <h2>서비스 준비중이에요!</h2>
      <p>
        사진관 위치 검색 서비스로
        <br />
        돌아올테니 조금만 기다려주세요.
      </p>
    </ErrorAnnouncement>
  );
}
