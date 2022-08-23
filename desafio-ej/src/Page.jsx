import React from 'react';
import styled from "styled-components";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Membros from './pages/Membros';
import Login from './pages/Login';
import Navbar from "./components/Navbar/Navbar";
import './Page.css';


const Footer = styled.div`
    bottom: 0;
    right: 0;
    left: 0;
    background: maroon;
    width: 100%;
    height: 100px;
    position: absolute;

 	> span {
    color: white;
    font-size: 1rem;
    padding: 1rem;
	text-align: center;
	}
`;

class Page extends React.Component {
    constructor() {
        super();
        
        this.state = {
          home: true,
          sobre: false,
          contato: false,
          membros: false,
          login: false
        }
      }

      /* if {window.location.pathname} is equal to one of the states, turn all the others to false and the state of the pathname to true */
      componentDidMount() {
        if (window.location.pathname === '') {
          this.setState({
            home: true,
            sobre: false,
            contato: false,
            membros: false,
            login: false
          })
        } else if (window.location.pathname === '/sobre') {
          this.setState({
            home: false,
            sobre: true,
            contato: false,
            membros: false,
            login: false
          })
        } else if (window.location.pathname === '/contato') {
          this.setState({
            home: false,
            sobre: false,
            contato: true,
            membros: false,
            login: false
          })
        } else if (window.location.pathname === '/membros') {
          this.setState({
            home: false,
            sobre: false,
            contato: false,
            membros: true,
            login: false
          })
        } else if (window.location.pathname === '/login') {
          this.setState({
            home: false,
            sobre: false,
            contato: false,
            membros: false,
            login: true
          })
        }
      }

      render(){
        return(
            <>
            <Navbar />

            <div className="container">
              { this.state.home && <Home /> }
              { this.state.sobre && <Sobre /> }
              { this.state.contato && <Contato /> }
              { this.state.membros && <Membros /> }
              { this.state.login && <Login /> }
            </div>

            <Footer />
            </>
        )
      }
}

export default Page;