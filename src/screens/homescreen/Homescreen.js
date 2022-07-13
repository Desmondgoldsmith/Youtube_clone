import React from 'react';
import Video from '../../components/Video/Video';
import Category from '../../components/categoriesBar/Category';
import { Col, Container, Row } from 'react-bootstrap';

const Homescreen = () => {
    
        return (
            // <React.Fragment>
            <Container border border-info>
             <Category />
                <Row>
                  {[...new Array(20)].map(()=>(
                    <Col lg={3} md={3}>
                        <Video /> 
                    </Col>
                  ))}  
                </Row>
        </Container>
        // </React.Fragment>
        );
    }

 
export default Homescreen;