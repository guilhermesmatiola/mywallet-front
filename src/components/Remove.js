import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import {React, useContext, useState } from 'react';
import UserContext from "../context/UserContext";
import { ThreeDots } from  'react-loader-spinner';

export default function LoginScreen(){
    
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    function Login(event){
        event.preventDefault();
        setIsLoading(true);
        const postLogin={
            email,
            password
        }

        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",postLogin);

        promise.then(resposta => {
            setEmail("");
            setPassword("");
            setIsLoading(false);
            console.log(resposta.data);
            setUser(
                {   
                    image: resposta.data.image,
                    token: resposta.data.token,
                    percentage: 0
                },
            );
            navigate("/principal");
        });
    }
    
    return(
        <>
        <Header>
            <h1>Nova Saída</h1>     
        </Header>
        <Container>
            {isLoading ? (
                <Form background={"#f2f2f2"} color={"#afafaf"}>
                    <input disabled type="email" id="email" value={email} placeholder="Valor" required onChange={(e)=>setEmail(e.target.value)} />
                    <input disabled type="password" id="password" value={password} placeholder="Descrição" required onChange={(e)=>setPassword(e.target.value)} />
                    <button type="submit" disabled opacity={0.7}>{<ThreeDots color={"#ffffff"} width={51} />}</button>
                </Form>
                 ) : ( 
                <Form background={"#ffffff"} color={"#000000"} onSubmit={Login}>
                    <input type="email" id="email" value={email} placeholder="Valor" required onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" id="password" value={password} placeholder="Descrição" required onChange={(e)=>setPassword(e.target.value)} />
                    <button type="submit">Enviar saída</button>
                </Form>
            )}
        </Container>
        </>
    )
}
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 36px;
    margin-left: 36px;
    
    input {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        min-width:  100px;
        margin-bottom: 6px;
        border-radius: 5px;
        border: 1px solid #D4D4D4; 
        padding-left:11px ;
        color: ${props => props.color};
        background-color: ${props => props.background};
    }
    input::placeholder {
        
        color: darkgray;
        font-size: 20px;
        font-style: italic;
    }
    button {
        font-family: 'Raleway';
        font-weight: 700;
        min-width: 100px;
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        text-align: center;
        background-color: #A328D6;
        color: #FFFFFF;
        font-size: 21px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            text-decoration: none;
        }
    }
`
const Header=styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color:#8C11BE ;
    justify-content: space-between;
    position:fixed;
    top:0;
    right:0;
    h1{
        margin:18px; 
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    ion-icon{
        color:white;
        margin:18px;
        width: 30px;
        height: 51px;
        border-radius: 98.5px;
    }
`
const Container=styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 80px;
justify-content: space-between;
width: 90%;
font-family: 'Lexend Deca', sans-serif;
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #8C11BE;
}
`