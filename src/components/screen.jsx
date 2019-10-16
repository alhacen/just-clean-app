import React, {useEffect} from 'react';


const Screen = ({title, screen: ScreenComponent}) => {
  useEffect(() => {
    document.title = `${title} || Just Clean Rojgar`;
  }, [title]);

  return (
    <ScreenComponent />
  );
};

export default Screen;
