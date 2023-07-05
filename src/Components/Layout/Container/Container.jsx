import cn from 'classnames';
import style from './Container.module.scss';

const Container = ({ className, children}) => {
  return (
    <div className={cn(style.container, className)}>
      {children}
    </div>
  );
};

export default Container;