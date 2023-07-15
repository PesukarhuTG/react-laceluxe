import { useEffect, useRef } from 'react';
import style from './ColorLabel.module.scss';

const ColorLabel = ({ colorCode, check, selectedColor, handleColorChange }) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', colorCode?.code);
  }, [colorCode]);

  return (
    <label className={style.color} ref={colorRef}>
      <input 
          className={style.input}
          type='radio'
          name='color'
          value={colorCode?.title}
          checked={selectedColor ? selectedColor === colorCode?.title : check}
          onChange={handleColorChange}
      />
      <span className={style.colorCheck}></span>
    </label>
  );
};

export default ColorLabel;
