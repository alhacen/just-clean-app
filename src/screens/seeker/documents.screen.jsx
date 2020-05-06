import React, {useState, useEffect} from 'react';
import {Button, Typography, notification, Row, Card, Col, Skeleton} from 'antd';
import FileViewer from 'react-file-viewer';
import {loadSecureUrl} from 'helpers/api/main.api.helper';

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

    if (docs.length === 0)
        return (
            <div>
                No Training / Job Counselling Sessions available for now. Please, check later.
            </div>
        );

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
                                    <a href={file} target='_blank' rel="noopener noreferrer">
                                        <Button block type="primary" shape="round" icon="download" size={'large'}>
                                            Download ( डाउनलोड )
                                        </Button>
                                    </a>
                                    <br/><br/>

                                </div>
                            ) : null}

                            {link ? (
                                <div>
                                    <a href={link} target='_blank' rel="noopener noreferrer">
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

        </div>
    );
};


const DocsHome = () => {

    return (
        <div className='full-page'>
            <div style={{maxWidth: '95vw', padding: '25px'}}>
                <Title>
                    Training / Job Counselling Sessions
                </Title>
                <br/>
                <Documents/>
            </div>
        </div>
    );
};

export default DocsHome;
