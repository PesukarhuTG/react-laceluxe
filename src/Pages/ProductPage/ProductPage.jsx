import { useEffect, useState } from 'react';
import style from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Components/Layout/Container/Container';
import { fetchProduct } from '../../store/productSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const';
import cn from 'classnames';
import ColorList from '../../Components/ColorList/ColorList';
import ProductSize from '../../Components/ProductSize/ProductSize';
import { ReactComponent as Like } from '../../assets/heart.svg';
import Count from '../../Components/Count/Count';
import Goods from '../../Components/Goods/Goods';
import { fetchCategory } from '../../store/goodSlice';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const { gender, category, pic, title, price, id: prodId, colors, description, size  } = product;

  const [selectedColor, setSelectedColor] = useState('');
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchCategory({gender, category, count: 4, top: true, exclude: id}));
  }, [gender, category, id, dispatch]);

  return (
    <>
    <section className={style.card}>
      <Container className={style.container}>
        <img 
          className={style.image}
          src={`${API_URL}/${pic}`} 
          alt={title}
        />
        <form className={style.content}>
          <h2 className={style.title}>{title}</h2>
          <p className={style.price}>руб {price}</p>
          <div className={style.vendorCode}>
            <span className={style.subtitle}>Артикул</span>
            <span className={style.id}>{prodId}</span>
          </div>

          <div className={style.color}>
            <span className={cn(style.subtitle, style.colorTitle)}>Цвет</span>
            <ColorList
              colors={colors}
              selectedColor={selectedColor}
              handleColorChange={handleColorChange}
            />
          </div>

            <ProductSize
              size={size}
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
            />

          <div className={style.description}>
            <p className={cn(style.subtitle, style.descriptionTitle)}>
              Описание
            </p>
            <p className={style.descriptionText}>{description}</p>
          </div>

          <div className={style.control}>
            <Count 
                className={style.count}
                count={count}
                handleIncrement = { handleIncrement }
                handleDecrement = { handleDecrement }
            />
            <button className={style.addCart} type='submit' aria-label='Добавить в корзину'>
              В корзину
            </button>
            <button type='button'aria-label='Добавить в избранное'>
              <Like />
            </button>
          </div>
        </form>
      </Container>
    </section>

    <Goods title={'Вам может понравиться'} />
    </>
  );
};

export default ProductPage;
