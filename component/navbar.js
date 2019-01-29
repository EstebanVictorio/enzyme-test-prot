import styled from 'styled-components';
import Link from 'next/link'

const Navbar = props =>
  <nav className={props.className}>
    Rent Selector
  </nav>

const StyledNavbar = styled(Navbar)`
  background-color: crimson;
  margin: 0;
  padding: 0;
  color: whitesmoke;
  min-height: 60px;
  display: flex;
  align-items: center;
`

export default StyledNavbar
