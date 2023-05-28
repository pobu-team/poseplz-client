import { useNavigate } from 'react-router';

import { useSearchParams } from 'react-router-dom';

import PoseDetail from '../components/detail/PoseDetail';
import useSelectStore from '../hooks/useSelectStore';

export default function PoseDetailPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [_, store] = useSelectStore();

  const imageSrc = searchParams.get('imageSrc') ?? undefined;

  const handleClickBack = () => {
    store.resetTheme();
    navigate('/people');
  };

  return (
    <PoseDetail
      imageSrc={imageSrc}
      onClickBack={handleClickBack}
    />
  );
}
