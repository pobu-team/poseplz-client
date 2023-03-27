import Layout from './components/Layout';
import HomeLayout from './components/HomeLayout';

import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import MyLikePage from './pages/MyLikePage';
import PoseDetailPage from './pages/PoseDetailPage';
import SelectPeoplePage from './pages/SelectPeoplePage';
import SelectPosePage from './pages/SelectPosePage';
import SelectThemePage from './pages/SelectThemePage';

const routes = [
	{
		element: <Layout />,
		children: [
			{path: '/main', element: <MainPage />},
			{path: '/people', element: <SelectPeoplePage />},
			{path: '/theme', element: <SelectThemePage />},
			{path: '/pose', element: <SelectPosePage />},
			{path: '/detail', element: <PoseDetailPage />},
			{path: '/mypage', element: <MyLikePage />},
		],
	},
	{
		element: <HomeLayout />,
		children: [
			{path: '/', element: <HomePage/>},
		],
	},
];

export default routes;
