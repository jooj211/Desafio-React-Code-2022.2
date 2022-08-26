import React from 'react';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Membros from './pages/Membros.js';
import Login from './pages/Login/Login.js';
import Admin from './pages/Admin';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './Page.css';


class Page extends React.Component {
    constructor() {
        super();
        
        this.state = {
          home: true,
          sobre: false,
          membros: false,
          login: false,
          admin: false
        }
      }

      /* if {window.location.pathname} is equal to one of the states, turn all the others to false and the state of the pathname to true */
      componentDidMount() {
        if (window.location.pathname === '/sobre') {
          this.setState({
            home: false,
            sobre: true,
            membros: false,
            login: false,
            admin: false
          })
        } else if (window.location.pathname === '/membros') {
          this.setState({
            home: false,
            sobre: false,
            membros: true,
            login: false,
            admin: false
          })
        } else if (window.location.pathname === '/login') {
          this.setState({
            home: false,
            sobre: false,
            membros: false,
            login: true,
            admin: false
          })
        } else if (window.location.pathname === '/admin') {
          this.setState({
            home: false,
            sobre: false,
            membros: false,
            login: false,
            admin: true
          })
        }
        else {
          this.setState({
            home: true,
            sobre: false,
            membros: false,
            login: false,
            admin: false
          })
        }
      }

      render(){
        return(
            <>
            <Navbar />

            <div className="container-page">
              
              { 
              this.state.home ? <Home /> :
              this.state.sobre ? <Sobre /> :
              this.state.membros ? <Membros /> : 
              this.state.login ? <Login /> : 
              this.state.admin ? <Admin /> : 
              null 
              }

              {/* <Membros /> */}

            </div>

            <Footer />
            </>
        )
      }
}

export default Page;