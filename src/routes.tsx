import Layout from './components/layout/Layout';
import HomeLayout from './components/layout/HomeLayout';

import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import MyLikePage from './pages/MyPage';
import PoseDetailPage from './pages/PoseDetailPage';
import SelectPeoplePage from './pages/SelectPeoplePage';
import SelectPosePage from './pages/SelectPosePage';
import SelectThemePage from './pages/SelectThemePage';
import MyPageLayout from './components/layout/MyPageLayout';
import DetailLayout from './components/layout/DetailLayout';
import CATEGORY from './types/CategoryType';
import CategoryLayout from './components/layout/CategoryLayout';
import CategoryPage from './pages/CategoryPage';
import SelectLayout from './components/layout/SelectLayout';
import SelectResultLayout from './components/layout/SelectResultLayout';
import ErrorPage from './pages/ErrorPage';
import KakaoLogIn from './components/mypage/myLike/KakaoLogIn';
import RegisterLayout from './components/layout/RegisterLayout';
import RegisterPage from './pages/RegisterPage';
import RegisterInfoPage from './pages/RegisterInfoPage';
import MyLike from './components/mypage/myLike';
import Upload from './components/mypage/upload';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/main', element: <MainPage /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    element: <HomeLayout />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
  {
    element: <SelectLayout />,
    children: [
      { path: '/people', element: <SelectPeoplePage /> },
      { path: '/theme/:peopleNum', element: <SelectThemePage /> },
    ],
  },
  {
    element: <SelectResultLayout />,
    children: [
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
    element: <MyPageLayout />,
    children: [
      { path: '/mypage', element: <MyLikePage /> },
      { path: '/mylike', element: <MyLike /> },
      { path: '/upload', element: <Upload /> },
    ],
  },
  {
    element: <RegisterLayout />,
    children: [
      { path: '/register', element: <RegisterPage /> },
      { path: '/register/info', element: <RegisterInfoPage /> },
    ],
  },
  {
    element: <DetailLayout option="DETAIL" />,
    children: [
      { path: '/pose/detail', element: <PoseDetailPage /> },
    ],
  },
  {
    element: <DetailLayout option="RESULT" />,
    children: [
      { path: '/register/result', element: <PoseDetailPage /> },
    ],
  },
  {
    path: '/kakao/auth',
    element: <KakaoLogIn />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
