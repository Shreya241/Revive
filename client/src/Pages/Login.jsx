import React from 'react'

import styled from "styled-components";
const Header = styled.div`
  height: 10vh;
  background-color: #2CCEB2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 30px;
`;
const LoginForm = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`;
const Container = styled.div`
    height: 70vh;
    width: 30vw;
    border-radius: 20px;
`;
const FormHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15%;
    background-color: #2CCEB2;
    border-radius: 20px 20px 0 0;
    font-size: 25px;
    color: white;
`;
const InputContainer = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0 0 20px 20px;
`;
const InputField = styled.input`
    border: none;
    border-bottom: 2px solid white;
    width: 60%;
    height: 5vh;
    background: rgba(0, 0, 0, 0);
    font-size: 20px;
    outline: none;
`;
const ButtonContainer = styled.div``;
const ButtonOne = styled.button`
    background-color: #2CCEB2;
    padding: 12px 20px;
    margin: 10px;
    color: white;
    font-size: 17px;
    border-radius: 10px;
    border: none;
`;
const ButtonTwo = styled.button`
    padding: 12px;
    margin: 10px;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 17px;
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const Login = () => {
    return (
        <div>
            <Header>
                Revive
            </Header>
            <LoginForm>
                <Container>
                    <FormHeader>
                        LOGIN
                    </FormHeader>
                    <InputContainer>
                        <InputField placeholder="Username" />
                        <InputField placeholder="Password" />
                        <ButtonContainer>
                            <Row>
                                <ButtonOne>LOGIN</ButtonOne>
                                <ButtonTwo>Forgot Password?</ButtonTwo>
                            </Row>
                            <Row>
                                <ButtonOne>Need an account? Sign up now!</ButtonOne>
                            </Row>
                        </ButtonContainer>
                    </InputContainer>
                </Container>
            </LoginForm>
        </div>
    )
}
export default Login;