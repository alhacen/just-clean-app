import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Menu} from 'antd';

const {Item} = Menu;

const HeaderPills = ({isAuthenticated, user, signOut, mode}) => (
    <Menu mode={mode} className='no-border' selectedKeys={[]} style={{border: '0 solid #000'}}>
        {isAuthenticated ? (
            <Item>
                <Link to='/sign-in/'>
                    Job Portal
                </Link>
            </Item>
        ) : null}
        <Item>
            {!isAuthenticated ? (
                <Link to='/sign-in/'>
                    <Button type='primary'>
                        Sign In
                    </Button>
                </Link>
            ) : (
                <span>
                {user.name}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type='dashed' onClick={signOut}>
                    Sign Out
                </Button>
                </span>
            )}
        </Item>
    </Menu>
);


export default HeaderPills;
