import style from './BtnLike.module.scss';
import { ReactComponent as LikeSVG } from '../../assets/heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../store/favoritesSlice';
import cn from 'classnames';

const BtnLike = ({ id }) => {
  const dispatch = useDispatch();
  const isFavorites = useSelector((state) => state.favorites.includes(id));

  const handleToggleFavorites = () => {
    if (isFavorites) {
      dispatch(removeFromFavorite({ id }));
    } else {
      dispatch(addToFavorite({ id }));
    }
  };

  return (
    <button
      className={isFavorites ? cn(style.like, style.active) : style.like}
      aria-label='Добавить в избранное'
      type='button'
      onClick={handleToggleFavorites}
    >
      <LikeSVG />
    </button>
  );
};

export default BtnLike;
