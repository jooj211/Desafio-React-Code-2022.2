import styled from 'styled-components';
import React from "react";
import './Footer.css';

const Footer = styled.div`
    bottom: 0;
    right: 0;
    left: 0;
    background: maroon;
    width: 100%;
    height: 100px;
    position: relative;

 	> span {
    color: white;
    font-size: 1rem;
    padding: 1rem;
	text-align: center;
	}
`;

export default Footer;