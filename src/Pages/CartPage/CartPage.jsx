import Order from './Order/Order';
import Cart from './Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAll } from '../../store/goodSlice';

const CartPage = () => {
  const { cartItems, countItems } = useSelector((state) => state.cart);
  const { goodsList } = useSelector((state) => state.goods);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({list: cartItems.map((item) => item.id)}));
      setCount(countItems);
    }
  }, [cartItems, count, countItems, dispatch]);

  return (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      <Order cartItems={cartItems} goodsList={goodsList} />
    </>
  );
};

export default CartPage;
