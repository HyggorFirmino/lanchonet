import { Container, Nav, NavDropdown, Navbar as BootstrapNavbar } from 'react-bootstrap';
import './navbar.css'

/**
 * A basic navigation bar component.
 */
function NavigationBar() {
    return (
        <BootstrapNavbar fixed='top' expand="lg" className="bg-blur">
            <Container>
                <BootstrapNavbar.Brand href="#home">Lancho.net</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Carrinho</Nav.Link>
                        <Nav.Link href="#link">Carrinho</Nav.Link>
                        <NavDropdown title="Perfil" id="basic-nav-dropdown" className="text-white">
                            <NavDropdown.Item href="#action/3.1" className="dropdown-item text-black fw-bold">MEUS PEDIDOS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className="dropdown-item text-black fw-bold">
                                MEU PERFIL
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className="dropdown-item text-black fw-bold">SAIR</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className="dropdown-item text-black fw-bold">
                                ENTRAR
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default NavigationBar;