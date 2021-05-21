import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import NightModeToggle from './NightModeToggle'

const Logo = styled.h3`
  color: #fff;
  text-decoration: none;
`

const Header = () => {
  const darkMode = useSelector((state) => state.darkMode)
  const { theme } = darkMode

  const [mode, setMode] = useState(theme)

  return (
    <header>
      <Navbar
        bg='dark'
        className='navbar navbar-expand-lg navbar-dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand className='mr-n4'>
            <Navbar.Brand>
              <LinkContainer to='/'>
                <Nav.Link>
                  <Logo>Hero Weather</Logo>
                </Nav.Link>
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <Nav>
              <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-home'></i> Home{' '}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/favorites'>
                <Nav.Link>
                  <i className='fas fa-star'></i> Favorites
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <NightModeToggle
              className='toggler'
              size={50}
              onChange={setMode}
              checked={mode}
              speed={2}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
