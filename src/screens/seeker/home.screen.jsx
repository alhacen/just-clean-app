import React, {useState, useEffect} from 'react';
import {Button, Typography, notification, Row, Card, Col, Skeleton} from 'antd';
import {Link} from 'react-router-dom';
import FileViewer from 'react-file-viewer';
import {loadSecureUrl} from 'helpers/api/main.api.helper';
import JobImage from 'components/jobImage';

const {Title} = Typography;

const Documents = () => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const x = async () => {
            try {
                setDocs(
                    await loadSecureUrl('/seeker/docs/')
                )
            } catch (e) {
                notification.error({
                    message: 'Error loading Documents'
                })
            }

            setLoading(false);
        };

        x();
    }, []);


    const getFileType = (file) => {
        const arr = file.split('.');
        return arr[arr.length - 1]
    };

    if (loading)
        return (
            <Card>
                <Skeleton/>
            </Card>
        );

    console.log(docs);

    return (
        <div>
            {docs.map(({title, desc, embed, link, file}, index) => (
                <div key={index.toString()}>
                    <Row gutter={{xs: 8, sm: 16, md: 24}}>
                        <Col xs={24} md={12}>
                            <Title level={4}>
                                {title}
                            </Title>
                            {desc}

                            {file || link ? (
                                <><br/><br/></>
                            ) : null}

                            {file ? (
                                <div>
                                    <a href={file} target='_blank' rel="noopener noreferrer" >
                                        <Button block type="primary" shape="round" icon="download" size={'large'}>
                                            Download ( डाउनलोड )
                                        </Button>
                                    </a>
                                    <br/><br/>

                                </div>
                            ) : null}

                            {link ? (
                                <div>
                                    <a href={link} target='_blank' rel="noopener noreferrer" >
                                        <Button block type="primary" shape="round" icon="link" size={'large'}>
                                            Open ( नए टैब में खोलें )
                                        </Button>
                                    </a>
                                    <br/><br/>
                                </div>
                            ) : null}
                        </Col>
                        <Col xs={24} md={12}>
                            {embed ? (
                                <div>
                                    <div className='embed' dangerouslySetInnerHTML={{__html: embed}}>
                                    </div>
                                    <br/>
                                </div>
                            ) : null}

                            {file ? (
                                <div>
                                    <FileViewer
                                        fileType={getFileType(file)}
                                        filePath={file}
                                        errorComponent={() => null}
                                        onError={console.error}
                                    />
                                </div>
                            ) : null}
                        </Col>
                    </Row>
                </div>
            ))}

            {docs.lenght? (
                <><br/><br/></>
            ) : null}
        </div>
    );
};


const Home = () => {

    const [jobs, setJobs] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const x = async () => {
            try {
                setJobs(
                    await loadSecureUrl('/seeker/jobs/available/count/')
                )
            } catch (e) {
                notification.error({
                    message: 'Error loading jobs'
                })
            }

            setLoading(false);
        };

        x();
    }, [setJobs]);

    return (
        <div className='full-page'>
            <div style={{maxWidth: '95vw', padding: '25px'}}>
                <Link to='/jobs/applied/'>
                    <Button size='large'>
                        Applied Jobs ( उपलब्ध नौकरियां )
                    </Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/jobs/'>
                    <Button icon='search' size='large' type='primary'>
                        Find Jobs ( नौकरी ढुंढो )
                    </Button>
                </Link>
                <br/>
                <br/>
                <Documents/>
                <Title>
                    Jobs Available
                </Title>
                <br/>
                <Row>
                    {loading ? (
                        <Card>
                            <Skeleton/>
                        </Card>
                    ) : null}

                    {Object.keys(jobs).map(title => (
                        <JobImage link={'/jobs/search/' + btoa(title) + '/'} label={title} count={jobs[title]}/>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Home;
