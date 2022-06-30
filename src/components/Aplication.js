import {React,useEffect,useState,useContext} from "react";
import styled from 'styled-components';
import dayjs from "dayjs";
import locale from  "dayjs/locale/pt-br";
import axios from "axios";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function Today(){

    const navigate = useNavigate();

    const [habits,setHabits]=useState([]);
    
    const { user , setUser} = useContext(UserContext);
    
    const {image,token} = user;
 
    const now = dayjs().locale("pt-br");

    function loadHabits(){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config);
    
        promise.then(resposta => {
            nDone=0;
            for(let i=0;i<resposta.data.length;i++){
                if(resposta.data[i].done){
                    nDone++;
                }
            }
            setUser(
                {   
                    image: user.image,
                    token: user.token,
                    percentage: (nDone/resposta.data.length)*100
                },
            );
            setHabits(resposta.data);
        });
        
    }
    let nDone=0;
    let txtcolor="#BABABA";
    let percent;
    let txt=countDone();
    
    function countDone(){
        
        for(let i=0;i<habits.length;i++){
            if(habits[i].done){
                nDone++;
            }
        }
        if(nDone===0){
            return "Nenhum hábito concluído ainda";
        }else{
            txtcolor="#8FC549";
            return `${(nDone/habits.length*100).toFixed(0)}% dos hábitos concluídos`;
        }
    }

    // useEffect(() => {
    //     loadHabits();
        
    // }, []);

    const day = now.format("dddd");
    const Day = day.charAt(0).toUpperCase() + day.slice(1);
    
    return(
        <>
        <Header>
            <h1>Olá, Fulano</h1>     
            <ion-icon name="log-out-outline"></ion-icon>
        </Header>
        <Page>
            <Register><Data>{now.format("DD/MM")}</Data>  {Day}</Register>
            <Container>
            <Button onClick={()=>navigate("/add")}>
                <Column>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <Text>Nova entrada</Text>
                </Column>
            </Button>
            <Button onClick={()=>navigate("/remove")}>
                <Column>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <Text>Nova saída</Text>
                </Column>
            </Button>
            </Container>
        </Page>
        </>
    )
 
}
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
const Data=styled.h1`font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`
const Button=styled.button`
        font-family: 'Raleway';
        font-weight: 700;
        width: 155px;
        height: 114px;
        margin: auto;
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
`
const Column=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin-top: 20px;
    margin-bottom: 35px;
`
const Text=styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
`
const Page=styled.div`
    margin-top:70px;
    margin-bottom:70px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 140px);
    overflow-x: scroll;
`
const Register=styled.div`
    margin-top: 80px;
    width: 90%;
    height: 60%;
    background-color: white;
    border-radius: 5px;
`
const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    justify-content: space-between;
    width: 90%;
    font-family: 'Lexend Deca', sans-serif;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
`