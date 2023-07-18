import Order from './Order/Order';
import Cart from './Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAll } from '../../store/goodSlice';
import OrderModal from '../../Components/OrderModal/OrderModal';
import Preloader from '../../Components/Preloader/Preloader';

const CartPage = () => {
  const { cartItems, countItems, orderStatus } = useSelector(
    (state) => state.cart
  );
  const { goodsList, status } = useSelector((state) => state.goods);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map((item) => item.id) }));
      setCount(countItems);
    }
  }, [cartItems, count, countItems, dispatch]);

  return status === 'loading' ? (
    <Preloader />
  ) : (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      {cartItems.length ? <Order cartItems={cartItems} /> : ''}
      {orderStatus === 'success' && <OrderModal />}
    </>
  );
};

export default CartPage;
