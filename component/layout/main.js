import { createGlobalStyle } from 'styled-components'
import Navbar from 'component/element/navigation/navbar'

const GlobalStyle = createGlobalStyle`
  body, html{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Helvetica;
    font-weight: bold;
    background-color: whitesmoke;
  }
`

const Main = props =>
  <div>
    <GlobalStyle/>
    <Navbar />
    {props.children}
  </div>


export default Main
