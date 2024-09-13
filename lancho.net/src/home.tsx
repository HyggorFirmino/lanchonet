import { Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import './home.css'
function Home(){

    return(
        <Container className='container'>
            <Row className='mb-3'>
                <h1 className='conect'>Conectando você aos seus</h1>
                <h1 className='best'>MELHORES LANCHES</h1>
            </Row>
            <Row>
                <Col>
                    
                    <Card className='bg-warning'>

                        <CardImg src="./assets/imgs/oferta.png"></CardImg>
                    </Card>
                    
                </Col>
                <Col>
                    <Card>

                    </Card>
                </Col>
                <Col>
                    <Card>

                    </Card>
                </Col>
                <Col>
                    <Card>

                    </Card>
                </Col>
                
            </Row>
        </Container>
    )
}
export default Home;