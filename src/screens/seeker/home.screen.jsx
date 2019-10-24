import React, {useState, useEffect} from 'react';
import {Button, Card, Descriptions, Typography, Empty} from 'antd';
import {Link} from 'react-router-dom';
import {loadSecureUrl} from 'helpers/api/main.api.helper';

const {Title} = Typography;

const Home = () => {

    return (
        <div className='full-page'>
            <div style={{maxWidth: '95vw', padding: '25px'}}>
                <Link to='/jobs/applied/'>
                    <Button icon='search' size='large'>
                        Applied Jobs
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
