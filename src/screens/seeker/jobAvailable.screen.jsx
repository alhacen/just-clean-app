import React, {useEffect, useState} from 'react';
import {Button, Card, Descriptions, Typography, Empty, Select, Drawer, Input, notification, Skeleton} from 'antd';
import {withRouter} from 'react-router-dom';
import {loadSecureUrl} from 'helpers/api/main.api.helper';
import {jobTitleChoices} from 'constants/choices';
import {selectScreen} from 'helpers/screen.helper';

const {Title} = Typography;

const JobAvailable = ({history, match}) => {

    let title = '';
    if (match.params.hash)
        title = atob(match.params.hash);

    const [jobs, setJobs] = useState([]);
    const [applying, setApplying] = useState(false);
    const [value, setValue] = useState(title);
    const [drawerOpen, toggleDrawer] = useState(false);
    const [applyingFor, setApplyingFor] = useState(0);
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const x = async () => {
            setLoading(true);
            setJobs(
                await loadSecureUrl('/seeker/job/available/', {
                    params: {
                        title: value
                    }
                })
            );

            setLoading(false);
        };

        x();
    }, [setJobs, value]);

    return (
        <div className='full-page'>
            <div style={{maxWidth: '95vw', padding: '25px'}}>
                <div>
                    <Title level={3}>Job Available</Title>
                    <div>
                        <Select
                            style={{width: selectScreen('100%', 300)}}
                            value={value}
                            onChange={(value) => setValue(value)}
                        >
                            <Select.Option value=''>
                                According to my preference
                            </Select.Option>
                            {Object.keys(jobTitleChoices).map(key => (
                                <Select.Option value={key}>
                                    {key}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>

                    <br/>


                    {jobs.length === 0 ?
                        loading ? (
                            <Card>
                                <Skeleton/>
                            </Card>
                        ) : (
                            <Card>
                                <Empty description='No Job Available for now'/>
                            </Card>
                        )
                        : (
                            <Drawer
                                title="Apply"
                                visible={drawerOpen}
                                onClose={() => toggleDrawer(false)}
                                width={310}
                            >

                                {
                                    jobs[applyingFor].eligibility ? (
                                        <>
                                            <Title level={3}>
                                                Eligibility
                                            </Title>
                                            <p>{jobs[applyingFor].eligibility}</p>
                                            <br/>
                                        </>
                                    ) : null
                                }

                                {
                                    jobs[applyingFor].eligibility ? (
                                        <>
                                            <Title level={3}>
                                                Additional Info
                                            </Title>
                                            <p>{jobs[applyingFor].additional_info}</p>
                                            <br/>
                                        </>
                                    ) : null
                                }

                                {
                                    jobs[applyingFor].questions ? (
                                        <>
                                            <hr/>
                                            <Title level={3}>
                                                Questions
                                            </Title>
                                            <p>{jobs[applyingFor].questions}</p>
                                            <br/>

                                            <Input.TextArea
                                                name="answers"
                                                id="answers"
                                                cols="30"
                                                rows="10"
                                                placeholder={'Your answers'}
                                                required
                                                onChange={e => setAnswer(e.target.value)}
                                            >
                                            </Input.TextArea>
                                        </>
                                    ) : null
                                }
                                <br/>
                                <br/>
                                <Button
                                    loading={applying}
                                    type='primary'
                                    style={{width: '100%'}}
                                    onClick={async () => {
                                        try {
                                            setApplying(true);
                                            await loadSecureUrl(`/seeker/job/apply/${jobs[applyingFor].id}/`, {
                                                method: 'POST',
                                                data: {
                                                    answer: answer
                                                }
                                            });
                                            history.push('/');
                                        } catch (e) {
                                            notification.error({
                                                message: 'Unknown error occurred'
                                            });
                                            setApplying(false);
                                        }
                                    }}

                                >
                                    Apply
                                </Button>

                            </Drawer>
                        )}
                    {jobs.map((job, index) => {
                        return (
                            <Card bordered={false} key={index.toString()}>
                                <Descriptions title={`${job.title} - ${job.organisation}`}>

                                    <Descriptions.Item label='Posted on'>
                                        {new Date(job.posted).toLocaleString()}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Last Date of Application'>
                                        {new Date(job.apply_till).toLocaleString()}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Salary range'>
                                        {job.salary_range}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Educational Qualification'>
                                        {job.educational_qualification}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Job Location'>
                                        {job.location}
                                    </Descriptions.Item>

                                </Descriptions>

                                <Button
                                    type='primary'
                                    onClick={() => {
                                        toggleDrawer(true);
                                        setApplyingFor(index);
                                    }}
                                >
                                    Apply for this job
                                </Button>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default withRouter(JobAvailable);
