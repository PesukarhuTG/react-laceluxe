import { useEffect, useRef } from 'react';
import style from './ColorItem.module.scss';
import cn from 'classnames';

const ColorItem = ({ colorCode, check }) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', colorCode);
  }, [colorCode]);

  return (
    <li className={cn(style.color, check && style.colorCheck)} ref={colorRef} />
  );
};

export default ColorItem;
