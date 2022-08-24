import styled from 'styled-components';
import React from 'react';
import './Footer.css';

const FooterChild = styled.div`
    bottom: 0;
    right: 0;
    left: 0;
    background: maroon;
    width: 100%;
    height: 100px;
    margin-top: auto;
    position: absolute;
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
            <div className="container">
                <FooterChild/>
            </div>
        )
    }
}


export default Footer;