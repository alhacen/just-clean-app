import React, {useState, useEffect} from 'react';
import {Typography, Table} from 'antd';
import {withRouter} from 'react-router-dom';
import {loadSecureUrl} from 'helpers/api/main.api.helper';

const {Title} = Typography;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Fathers Name',
        dataIndex: 'fathers_name',
        key: 'fathers_name',
    }, {
        title: 'DOB',
        dataIndex: 'dob',
        key: 'dob',
    }, {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender'
    }, {
        title: 'State',
        dataIndex: 'state',
        key: 'state'
    }, {
        title: 'Education',
        dataIndex: 'educational_qualification',
        key: 'educational_qualification'
    },
];


const MySeekers = ({match}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const x = async () => {
            setData(
                await loadSecureUrl(`/partner/seeker/`)
            )
        };

        x();
    }, [setData,]);


    return (
        <div className='container'>
            <Title>Seeker You Added</Title>
            <Table columns={columns} dataSource={data} expandedRowRender={seeker => (
                <div>
                    {seeker.address}
                    <br/>
                    PinCode: {seeker.pin_code}
                </div>
            )}/>
        </div>
    )
};

export default withRouter(MySeekers);
