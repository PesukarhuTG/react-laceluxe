import { useRef } from 'react';
import style from './ProductSize.module.scss';
import cn from 'classnames';

const ProductSize = ({ size, selectedSize, handleSizeChange }) => {
  const sizeRef = useRef(null);

  return (
    <div className={style.size}>
      <span className={cn(style.subtitle, style.title)}>Размер</span>

      <div className={style.list}>
        {size?.map((sizeName) => {
          return (
            <label className={style.item} key={sizeName} ref={sizeRef}>
              <input
                className={style.input}
                type='radio'
                name='size'
                value={sizeName}
                checked={selectedSize === sizeName}
                onChange={handleSizeChange}
              />
              <span className={style.check}>{sizeName}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSize;
