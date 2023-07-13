import { useEffect, useState } from 'react';
import style from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Layout/Container/Container';
import { fetchProduct } from '../../store/productSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const';
import cn from 'classnames';
import ColorList from '../ColorList/ColorList';
import ProductSize from '../ProductSize/ProductSize';
import { ReactComponent as Like } from '../../assets/heart.svg';
import Count from '../Count/Count';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);

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
  }, [id]);

  return (
    <section className={style.card}>
      <Container className={style.container}>
        <img src={`${API_URL}/${product.pic}`} alt={product.title} />
        <form className={style.content}>
          <h2 className={style.title}>{product.title}</h2>
          <p className={style.price}>руб {product.price}</p>
          <div className={style.vendorCode}>
            <span className={style.subtitle}>Артикул</span>
            <span className={style.id}>{product.id}</span>
          </div>

          <div className={style.color}>
            <span className={cn(style.subtitle, style.colorTitle)}>Цвет</span>
            <ColorList
              colors={product.colors}
              selectedColor={selectedColor}
              handleColorChange={handleColorChange}
            />
          </div>

            <ProductSize
              size={product.size}
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
            />

          <div className={style.description}>
            <p className={cn(style.subtitle, style.descriptionTitle)}>
              Описание
            </p>
            <p className={style.descriptionText}>{product.description}</p>
          </div>

          <div className={style.control}>
            <Count 
                className={style.count}
                count={count}
                handleIncrement = { handleIncrement }
                handleDecrement = { handleDecrement }
            />
            <button className={style.addCart} type='submit' arial-label='Добавить в корзину'>
              В корзину
            </button>
            <button type='button' arial-label='Добавить в избранное'>
              <Like />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default ProductPage;
