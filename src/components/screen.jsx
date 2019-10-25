import React, {useEffect} from 'react';


const Screen = ({title, screen: ScreenComponent}) => {
    useEffect(() => {
        document.title = `${title} || Just Clean Rojgar`;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <ScreenComponent/>
    );
};

export default Screen;
