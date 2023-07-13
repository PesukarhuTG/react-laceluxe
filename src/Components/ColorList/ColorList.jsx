import { useSelector } from 'react-redux';
import style from './ColorList.module.scss';
import ColorItem from '../ColorItem/ColorItem';
import ColorLabel from '../ColorLabel/ColorLabel';

const ColorList = ({ colors, selectedColor, handleColorChange }) => {
  const { colorList } = useSelector((state) => state.color);

  return handleColorChange ? (
    <div className={style.colorList}>
      {colors?.map((id, i) => {
        const colorName = colorList.find((color) => color.id === id);
        return <ColorLabel 
                    key={id}
                    colorCode={colorName}
                    check={!i}
                    selectedColor={selectedColor}
                    handleColorChange={handleColorChange}
                />;
      })}
    </div>
  ) : (
    <ul className={style.colorList}>
      {colors?.map((id, i) => {
        const colorName = colorList.find((color) => color.id === id);
        return <ColorItem key={id} colorCode={colorName?.code} check={!i} />;
      })}
    </ul>
  );
};

export default ColorList;
