import React from 'react';
import {Card, Typography} from 'antd';
import {withRouter} from 'react-router-dom';
import AddApplicationForm from 'forms/addApplication.form/addApplication.form';


const {Title} = Typography;

const AddApplication = ({match}) => (
    <div className='full-page center-hv'>
        <Card style={{maxWidth: '95vw', width: 600}}>
            <Title>
                Add Job {match.params.hash}
            </Title>
            <AddApplicationForm title={atob(match.params.hash)} />
        </Card>
    </div>
);


export default withRouter(AddApplication);
