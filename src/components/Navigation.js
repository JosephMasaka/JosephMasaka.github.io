import { useState, useEffect  } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo.svg'
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg'
import NavIcon3 from '../assets/img/nav-icon3.svg'


const Navigation = () =>  {

    const [activeLink, setActiveLink] = useState('Home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll) 
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value)
    }

  return (
    <>
    <Navbar bg="" expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={'home' ? 'activeLink navbar-link active' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={'skills' ? 'activeLink navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={'projects' ? 'activeLink navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='/'>
                    <img src={NavIcon1} alt=''/>
                </a>
                <a href='/'>
                    <img src={NavIcon2} alt=''/>
                </a>
                <a href='/'>
                    <img src={NavIcon3} alt=''/>
                </a>
            </div>
            <button className='vvd' onClick={() => console.log()}>Let's Connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation