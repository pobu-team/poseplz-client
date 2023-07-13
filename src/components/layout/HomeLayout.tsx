import { Outlet } from 'react-router-dom';
import useTracking from '../../hooks/useTracking';

export default function HomeLayout() {
  useTracking();

  return (
    <Outlet />
  );
}
