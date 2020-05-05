import React from 'react';
import {Card, Typography} from 'antd';
import {withRouter} from 'react-router-dom';
import AddApplicationForm from 'forms/addApplication.form/addApplication.form';


const {Title} = Typography;

const AddApplication = ({match}) => {
    let title = null;
    if (match.params.hash)
        title = atob(match.params.hash);

    return (
        <div className='full-page center-hv container'>
            <Card style={{maxWidth: '95vw', width: 600}}>
                <Title>
                    Add Job
                </Title>
                <AddApplicationForm title={title}/>
            </Card>
        </div>
    );
};


export default withRouter(AddApplication);
