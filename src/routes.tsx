import Layout from './components/layout/Layout';
import HomeLayout from './components/layout/HomeLayout';

import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import MyLikePage from './pages/MyLikePage';
import PoseDetailPage from './pages/PoseDetailPage';
import SelectPeoplePage from './pages/SelectPeoplePage';
import SelectPosePage from './pages/SelectPosePage';
import SelectThemePage from './pages/SelectThemePage';
import BackLayout from './components/layout/BackLayout';
import MyPageLayout from './components/layout/MyPageLayout';
import DetailLayout from './components/layout/DetailLayout';
import CATEGORY from './types/CategoryType';
import CategoryLayout from './components/layout/CategoryLayout';
import CategoryPage from './pages/CategoryPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/main', element: <MainPage /> },
    ],
  },
  {
    element: <HomeLayout />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
  {
    element: <BackLayout />,
    children: [
      { path: '/people', element: <SelectPeoplePage /> },
      { path: '/theme/:peopleNum', element: <SelectThemePage /> },
      { path: '/pose/:id/:theme', element: <SelectPosePage /> },
    ],
  },
  {
    element: <CategoryLayout />,
    children: [
      { path: '/category/people', element: <CategoryPage category={CATEGORY.PEOPLE} /> },
      { path: '/category/theme', element: <CategoryPage category={CATEGORY.THEME} /> },
      { path: '/category/popular', element: <CategoryPage category={CATEGORY.POPULAR} /> },
    ],
  },
  {
    element: <DetailLayout />,
    children: [
      { path: '/pose/detail', element: <PoseDetailPage /> },
    ],
  },
  {
    element: <MyPageLayout />,
    children: [
      { path: '/mypage', element: <MyLikePage /> },
    ],
  },
];

export default routes;
