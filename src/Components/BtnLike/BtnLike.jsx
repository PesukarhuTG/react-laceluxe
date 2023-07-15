import style from './BtnLike.module.scss';
import { ReactComponent as LikeSVG } from '../../assets/heart.svg';

const BtnLike = ({id}) => {
  return (
    <button 
      className={style.like}
      aria-label='Добавить в избранное'
      type='button'
    >
      <LikeSVG />
    </button>
  )
};

export default BtnLike;