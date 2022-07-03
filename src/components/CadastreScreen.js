import React,{ useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import dotenv from 'dotenv';

export default function SignUp() {

    dotenv.config();
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");


    function submitData(event) {
        event.preventDefault();

        let postObject=
            {
                email ,
                password,
                name,
                passwordConfirmation
            };
        
        //const promise=axios.post("http://localhost:5000/cadastrar",postObject);
        const promise=axios.post("https://mywallet-guimatiola.herokuapp.com/cadastrar",postObject);

        promise.then(resposta => {
            setEmail("");
            setName("");
            setPasswordConfirmation("");
            setPassword("");
            navigate("/");
        });
    }

    return (
    <>
      <Container>
        <Logo>MyWallet</Logo>
        <Form onSubmit={submitData}>
            <input type="text" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="text" placeholder="nome" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input type="text"  placeholder="digite novamente sua senha" onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} />
            <button type="submit" >Cadastrar</button>
        </Form>
        <Link to='/'>Já tem uma conta? Entre agora! </Link>
      </Container>
    </>  
  );
}
// const Link = styled.div`
//     text-decoration: none;
// `
const Logo=styled.div`
    font-family: 'Saira Stencil One';
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 35px;
    color: white;
    line-height: 50px;
`
const Container=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 68px;
    
    font-family: 'Lexend Deca', sans-serif;
    img{
        width: 180px;
        height: 178px;
        margin-bottom: 35px;
    }
    a{
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration:none;

        color: white;
    }

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 36px;
    margin-left: 36px;
    
    input {
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        min-width: 150px;
        margin-bottom: 6px;
        border-radius: 5px;
        border: 1px solid #D4D4D4; 
        padding-left:11px ;
        box-sizing: border-box;

    }
    input::placeholder {
        color: grey;
        font-size: 20px;
        font-style: italic;
        box-sizing: border-box;
    }
    button {
        min-width: 303px;
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        text-align: center;
        background: #A328D6;

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