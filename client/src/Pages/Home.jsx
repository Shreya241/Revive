import React from 'react';
import Disability_List from '../components/Disability_List';
import styled from "styled-components";
import Navbar from '../components/Navbar';


const ListName= styled.div`
display:flex;

`;
const HomePage= styled.div``;

const SideBar= styled.div`
display:flex;
background-color: #B4D7D0;
height:100;
align-items: flex-start;
width:20%;
`;

const Box= styled.div`
background-color: #2CCEB2;
display:flex;
height:30vh;
text-align:center;
justify-content:center;
font-weight: 500;
font-size: 30px;
text-transform:uppercase;
line-height: 60px;
text-align: center;
align-items:center;
margin:130px 10px;
border-radius:30px;
`;

const Home = () => {
    return (
        <HomePage>
           <Navbar/>
           <ListName>
            <SideBar>
                <Box>
                    Select Your Options
                </Box>
            </SideBar>
            <Disability_List/>
            </ListName>
        </HomePage>
    )
}
export default Home;