import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/like': Favorite,
};

export default routes;
