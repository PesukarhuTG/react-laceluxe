import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './routes/Root';
import MainPage from './Components/MainPage/MainPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNavigation } from './store/navSlice';
import { fetchColors } from './store/colorSlice';
import ProductPage from './Components/ProductPage/ProductPage';
import FavoritePage from './Pages/FavoritePage/FavoritePage';
import CartPage from './Pages/CartPage/CartPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='/catalog/:gender/:category?' element={<MainPage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
