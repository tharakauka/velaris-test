import React, { Component } from 'react';
import { Container, Col, Row  } from 'reactstrap';
import Forum from '../Components/Forum';
import OnBoardNewUsers from '../Components/OnboardNewUsers';
import UploadCoverImage from '../Components/UploadCoverImage';

function Main(){
    return(
        <div className='mainWrapper'>
            <Container>
                <Row>
                    <div className='header'>
                        <h1>Welcome</h1>
                    </div>
                </Row>
                <Row className='components'>
                    <Col span={12} className='compLeft'>
                        <div className='conversation mb-3 compWrapper'>
                            <Forum />
                        </div>
                    </Col>
                    <Col span={12} className='compLeft'>
                        <div className='onboardUsers compWrapper mb-3'>
                            <OnBoardNewUsers />
                        </div>
                        <div className='uploadCover compWrapper'>
                            <UploadCoverImage />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;