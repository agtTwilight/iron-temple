import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

function Header() {
	return (
		<Navbar expand="lg" bg="dark" data-bs-theme="dark" id="header-container">
			<Container id="navbar-container">
				<Navbar.Brand href="/">IRON TEMPLE</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link className="nav-link" href="/about">
							About
						</Nav.Link>
						<Nav.Link
							className="nav-link"
							href="https://irontemple.gymmasteronline.com/portal/signup?session=.eJxNzEsKgCAQANC7zDrEmcZPXkYkK4RSKRdFdPdo1_7xbhhLbtPZ_Fi2GvKVIjjqIFUfYtzBASuhSaCVgqSCDo4W5nktS8rTWcGhHhgtomGhDRk7_MWXMRJj_7zXiR-T.ZPuGIg.6jWxN_EfrzfcK5J9I5rS81CAho8"
							target="_blank"
							rel="noreferrer"
						>
							Memberships
						</Nav.Link>
						{/* <Nav.Link className='nav-link' href="/store">Store</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
