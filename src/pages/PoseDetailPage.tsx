import { useNavigate } from 'react-router';

import { useSearchParams } from 'react-router-dom';

import PoseDetail from '../components/detail/PoseDetail';

export default function PoseDetailPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const poseId = searchParams.get('poseId') ?? undefined;

  const handleClickBack = () => {
    navigate('/people');
  };

  return (
    <PoseDetail
      poseId={poseId}
      onClickBack={handleClickBack}
    />
  );
}
