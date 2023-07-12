import { useSelector } from 'react-redux';
import style from './ColorList.module.scss';
import ColorItem from '../ColorItem/ColorItem';
import { useRef } from 'react';

const ColorList = ({ colors }) => {
  const { colorList } = useSelector((state) => state.color);

  return (
    <ul className={style.colorList}>
      {colors?.map((id, i) => {
        const colorName = colorList.find((color) => color.id === id);
        return <ColorItem key={id} colorCode={colorName?.code} check={!i} />;
      })}
    </ul>
  );
};

export default ColorList;
