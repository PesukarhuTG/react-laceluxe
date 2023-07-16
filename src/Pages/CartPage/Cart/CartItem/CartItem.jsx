import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../../const';
import style from './CartItem.module.scss';
import cn from 'classnames';
import { ReactComponent as DelSVG } from '../../../../assets/close.svg';
import Count from '../../../../Components/Count/Count';
import { addToCart } from '../../../../store/cartSlice';

const CartItem = ({ id, color, size, count, goodsList }) => {
  const dispatch = useDispatch();
  const { colorList } = useSelector((state) => state.color);
  const item = goodsList.find((item) => item.id === id);

  const handleCountChange = (count) => {
    dispatch(addToCart({id, color, size,count}));
  };

  return (
    <article className={style.item}>
      <img
        src={`${API_URL}/${item?.pic}`}
        alt={item?.title}
        className={style.image}
      />
      <div className={style.content}>
        <h3 className={style.title}>{item?.title}</h3>
        <p className={style.price}>руб {item?.price}</p>
        <div className={style.vendorCode}>
          <span className={style.subtitle}>Артикул</span>
          <span>{id}</span>
        </div>
        <div className={style.prop}>
          <div className={style.color}>
            <span className={cn(style.subtitle, style.colorTitle)}>Цвет</span>
            <div
              className={style.colorItem}
              style={{ '--data-color': colorList?.find((item) => item.title === color)?.code }}
            ></div>
          </div>
          <div className={style.size}>
            <span className={cn(style.subtitle, style.sizeTitle)}>Размер</span>
            <div className={style.sizeItem}>{size}</div>
          </div>
        </div>
      </div>

      <button className={style.del} type='button' aria-label='Удалить товар из корзины'>
        <DelSVG />
      </button>

      <Count 
        className={style.count}
        count={count}
        handleIncrement={() => {
          handleCountChange(count + 1)
        }}
        handleDecrement={() => {
          handleCountChange(count - 1)
        }}
      />
    </article>
  );
};

export default CartItem;
