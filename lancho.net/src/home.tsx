
import { Card, CardBody, CardImg, Col, Container, Row, Image } from 'react-bootstrap'
import './home.css'
function Home(){

    return(
        <Container className='container'>
            <Row className='mb-3'>
                <h1 className='conect'>Conectando você aos seus</h1>
                <h1 className='best'>MELHORES LANCHES</h1>
            </Row>
            <Row>
                <Col xs={5} md={1}>
                    <CardBody className='card-bg'>
                        <CardImg src="./assets/imgs/oferta.png"></CardImg>
                    </CardBody>                  
                </Col>
                <Col xs={5} md={1}>
                    <CardBody className='card-bg'>
                        <CardImg src="./assets/imgs/oferta.png"></CardImg>
                    </CardBody>                  
                </Col>
                <Col xs={5} md={1}>
                    <CardBody className='card-bg'>
                        <CardImg src="./assets/imgs/oferta.png"></CardImg>
                    </CardBody>                  
                </Col>
                <Col xs={5} md={1}>
                    <CardBody className='card-bg'>
                        <CardImg src="./assets/imgs/oferta.png"></CardImg>
                    </CardBody>                  
                </Col>
                
            </Row>
        </Container>
    )
}
export default Home;