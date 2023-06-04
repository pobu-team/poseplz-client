import { useNavigate } from 'react-router';

import { useSearchParams } from 'react-router-dom';

import PoseDetail from '../components/detail/PoseDetail';

export default function PoseDetailPage() {
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
