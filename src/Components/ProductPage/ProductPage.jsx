import { useEffect } from 'react';
import style from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Layout/Container/Container';
import { fetchProduct } from '../../store/productSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);

  useEffect(()=> {
    dispatch(fetchProduct(id))
  }, [id]);

  return (
    <section className={style.card}>
      <Container className={style.container}>
        <img src={`${API_URL}/${product.pic}`} alt={product.title} />
      </Container>
    </section>
  )
};

export default ProductPage;