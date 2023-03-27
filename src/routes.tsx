import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import MyLikePage from "./pages/MyLikePage";
import PoseDetailPage from "./pages/PoseDetailPage";
import SelectPeoplePage from "./pages/SelectPeoplePage";
import SelectPosePage from "./pages/SelectPosePage";
import SelectThemePage from "./pages/SelectThemePage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage/> },
      { path: '/main', element: <MainPage /> },
      { path: '/people', element: <SelectPeoplePage /> },
      { path: '/theme', element: <SelectThemePage /> },
      { path: '/pose', element: <SelectPosePage /> },
      { path: '/detail', element: <PoseDetailPage /> },
      { path: '/mypage', element: <MyLikePage /> },
    ],
  },
];

export default routes;
