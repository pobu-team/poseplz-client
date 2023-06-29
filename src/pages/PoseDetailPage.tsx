import { useSearchParams } from 'react-router-dom';

import PoseDetail from '../components/detail/PoseDetail';

export default function PoseDetailPage() {
  const [searchParams] = useSearchParams();

  const poseId = searchParams.get('poseId') ?? undefined;

  return (
    <PoseDetail poseId={poseId} />
  );
}
