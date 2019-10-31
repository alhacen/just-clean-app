import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Icon, Menu, Popover} from 'antd';

import {selectScreen} from 'helpers/screen.helper';


const PortalNavigator = ({routes}) => {
    const [visible, setVisible] = useState(false);
    const hide = () => setVisible(false);

    useEffect(() => {
        window.addEventListener('scroll', hide);

        return () => {
            window.removeEventListener('scroll', hide);
        };
    }, []);

    const menu = (
        <>
            <Menu
                mode='vertical'
                theme='light'
                forceSubMenuRender
                inlineCollapsed={selectScreen(null, false)}
                className={selectScreen(null, 'full-page')}
                selectedKeys={[]}>
                {routes.map((route, index) => (
                    <Menu.Item key={index.toString()}>
                        <Link to={route.path}>
                            <Icon type={route.icon}/>
                            <span>{route.name}</span>
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        </>
    );

    if (selectScreen(false, true))
        return (
            <div
                className='portal-side-nav'
                style={{
                    position: 'fixed',
                    top: 64,
                    left: 0,
                    width: 256
                }}
            >
                {menu}
            </div>
        );

    return (
        <Popover
            placement='topRight'
            title={null}
            content={menu}
            trigger='click'
            visible={visible}
            onVisibleChange={visible1 => setVisible(visible1)}>
            <div role='button' className='collapse-button-mobile'>
                <Icon type='menu'/>
            </div>
        </Popover>
    );
};

export default PortalNavigator;
