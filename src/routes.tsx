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

const routes = [
	{
		element: <Layout />,
		children: [
			{path: '/main', element: <MainPage />},
			{path: '/people', element: <SelectPeoplePage />},
			{path: '/theme', element: <SelectThemePage />},
			{path: '/pose', element: <SelectPosePage />},
		],
	},
	{
		element: <HomeLayout />,
		children: [
			{path: '/', element: <HomePage/>},
		],
	},
	{
		element: <BackLayout />,
		children: [
			{path: '/pose/detail', element: <PoseDetailPage />},
		],
	},
	{
		element: <MyPageLayout />,
		children: [
			{path: '/mypage', element: <MyLikePage />},
		],
	},
];

export default routes;
