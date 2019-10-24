import React, {useState, useEffect} from 'react';
import {Typography, Table, Button} from 'antd';
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
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
            switch (status) {
                case 'A':
                    return 'Applied';
                case 'S':
                    return 'Seen';
                case 'R':
                    return 'Rejected';
                case 'D':
                    return 'Selected';
                case 'J':
                    return 'Joined';
                default:
                    return 'Unknown';
            }
        }
    }
];


const JobApplication = ({match}) => {
    const job_id = match.params.job_id;

    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const x = async () => {
            setData(
                await loadSecureUrl(`/employer/jobs/${job_id}/`)
            )
        };

        x();
    }, [setData, updating, job_id]);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRow(selectedRows.map((selected) => selected.id));
        }
    };

    const changeStatus = async (status) => {
        setUpdating(true);
        await loadSecureUrl(`employer/jobs/${job_id}/`, {
            method: 'POST',
            data: {
                seekers: selectedRow,
                status: status
            }
        });
        setUpdating(false);

    };

    return (
        <div className='container'>
            <Title>Job Application</Title>
            <Button.Group>
                <Button type='primary' onClick={() => changeStatus('D')}>
                    Mark them as selected
                </Button>
                <Button onClick={() => changeStatus('J')}>
                    Mark them as joined
                </Button>

                <Button onClick={() => changeStatus('R')} type='dashed'>
                    Mark them as rejected
                </Button>
                <Button onClick={() => changeStatus('B')} type='danger'>
                    Mark them as blacklisted
                </Button>
            </Button.Group>
            <br/>
            <br/>
            <Table columns={columns} dataSource={data} rowSelection={rowSelection} expandedRowRender={seeker => (
                <div>
                    {seeker.address}
                    <br/>
                    PinCode: {seeker.pin_code}
                </div>
            )}/>
        </div>
    )
};

export default withRouter(JobApplication);
