import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { authPoseService } from '../api/authPoseService';

export default function useDeletePose() {
  const { mutate, isSuccess: isDeleteSuccess } = useMutation({
    mutationFn: (id: string) => authPoseService.deletePose(id),
  });
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isDeleteSuccess) {
      // eslint-disable-next-line no-unused-expressions
      pathname.includes('register') ? navigate('/main') : navigate(-1);
    }
  }, [isDeleteSuccess]);

  return mutate;
}
