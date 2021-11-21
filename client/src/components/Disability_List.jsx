import React from "react";
import styled from "styled-components";
import Image1 from "../images/img1.svg";
import Image2 from "../images/img2.svg";
import Image3 from "../images/img3.svg";
import Image4 from "../images/wheelchair.svg";
import Image5 from "../images/brain.svg";

const ListBox= styled.div`
background-color: #B4D7D0;
display:flex;
height:20vh;
align-items: center;
justify-content: space-around;
font-weight: 500;
font-size: 30px;
margin:40px 50px;
border-radius:10px;
width:70vw;
`;

const Image =styled.img`
height:80px;
`;
const Icon= styled.div`

`;

const List= styled.div``;

const Disability_List = () => {
   

    return (
        <List>
            <ListBox>
            <label>Vision impairments</label>
            <Icon>
            <Image src={Image3}/>
            </Icon>
            </ListBox>

             <ListBox>
            <label>Hearing impairments</label>
            <Icon>
            <Image src={Image1}/>
            </Icon>
            </ListBox>

            <ListBox>
            <label>Speech impairments</label>
            <Icon>
            <Image src={Image2}/>
            </Icon>
            </ListBox>

            <ListBox>
            <label>Mobility impairments</label>
            <Icon>
            <Image src={Image4}/>
            </Icon>
            </ListBox>

            <ListBox>
            <label>Cognitive impairments</label>
            <Icon>
            <Image src={Image5}/>
            </Icon>
            </ListBox>
        </List>
    )
}

export default Disability_List;
