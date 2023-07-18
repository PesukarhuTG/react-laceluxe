import { Oval } from 'react-loader-spinner';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '100px 0',
};

const Preloader = () => {
  return (
    <div style={style}>
      <Oval
        height={80}
        width={80}
        color='#292929'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#292929'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Preloader;
