import { createBrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import History from './component/History';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/history',
    element: <History />,
  }
]);
export default router;