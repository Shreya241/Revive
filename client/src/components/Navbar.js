import React from 'react';
import styled from 'styled-components';
import Revive from "../images/Revive.svg";
import Mic from "../images/mic.svg";
import User from "../images/user.svg";
import Hand from "../images/hand.svg";

const Image =styled.img`
height:40px;
margin:10px 10px;
`;
const Logo =styled.div``;

const Nav =styled.div`
background-color:#2CCEB2;
height:10vh;
width:100%;
display:flex;
justify-content:space-between;
`;
const Icons =styled.div``;

const ImageLogo =styled.img`
height:40px;
margin:10px 15px;
`;


const Navbar = () => {
    return (
        <Nav>
            <Logo>
            <Image src={Revive}/>
            </Logo>
            <Icons>
            <ImageLogo src={Hand}/>
            <ImageLogo src={Mic}/>
            <ImageLogo src={User}/>
            </Icons>
        </Nav>
    )
}

export default Navbar;
