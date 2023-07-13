import { useRef } from 'react';
import style from './ProductSize.module.scss';
import cn from 'classnames';

const ProductSize = ({ size, selectedSize, handleSizeChange }) => {
  const sizeRef = useRef(null);

  return (
    <div className={style.size}>
      <span className={cn(style.subtitle, style.title)}>Размер</span>

      <ul className={style.list}>
        {size?.map((sizeName, i) => {
          return (
            <li key={i}>
              <label className={style.item} ref={sizeRef}>
                <input
                  className={style.input}
                  type='radio'
                  name='size'
                  value={sizeName}
                  checked={selectedSize === size ? true : false}
                  onChange={handleSizeChange}
                />
                <span className={style.check}>{sizeName}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductSize;
