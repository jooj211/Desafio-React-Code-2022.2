import styled from 'styled-components';
import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

const FooterContainer = styled.div`
    bottom: 0;
    right: 0;
    left: 0;
    background: maroon;
    width: 100%;
    height: 100px;
    margin-top: auto;
    position: relative;
    z-index: 0;

 	> span {
    color: white;
    font-size: 1rem;
    padding: 1rem;
	text-align: center;
	}
`;

class Footer extends React.Component {
    render() {
        return(
            <FooterContainer>
                <div className="footer-contents">
                    <span>© Cine Jr. 2022 - Todos os direitos reservados</span>
                    <div className="social-media">
                        <a href="https://facebook.com"><i className="fa fa-facebook facebook"/></a>
                        <a href="https://instagram.com"><i className="fa fa-instagram instagram"/></a>
                        <a href="https://linkedin.com"><i className="fa fa-linkedin linkedin"/></a>
                    </div>
                </div>
            </FooterContainer>
        );
    }
}


export default Footer;

/* 
* Q: what command should i run to install the font-awesome/css/font-awesome.min.css folder?
* A: npm install font-awesome
*/