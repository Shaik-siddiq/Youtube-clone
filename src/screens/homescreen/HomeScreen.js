import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import Categorybar from '../../components/categorybar/Categorybar'
import Video from '../../components/video/Video'

const HomeScreen = () => {
    return (
        <>
            <Container>
                <Row>
                    <Categorybar />
                    {[...new Array(20)].map((k,index)=>{
                        return(
                            <Col key={index} lg={3} md={4}>
                             <Video />
                            </Col>
                        )
                    })}
                    
                </Row>

            </Container>
            
        </>
    )
}

export default HomeScreen
