import {React,useEffect,useState,useContext} from "react";
import styled from 'styled-components';
import dayjs from "dayjs";
import locale from  "dayjs/locale/pt-br";
import axios from "axios";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function Today(){

    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { name, email, token } = user;
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function GetTransactions() {
        const config = {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios.get(
            //"http://localhost:5000/transactions",
            "https://mywallet-guimatiola.herokuapp.com/transactions",
            config
            );

        setTransactions(response.data);
        } catch (error) {
            const message = error.response.statusText;
            alert(message);
        }
        }
        GetTransactions();
    }, []);

    function RenderTransactions() {
        if (transactions.length === 0) {
          return (
              <div className="withouttransaction">
              <p>Não há registros de entrada ou saída</p>
              </div>
          );
        }

        return transactions.map((transaction, index) => {
        const { date, description, value, type, _id } = transaction;
        const newvalue = parseFloat(value.replace(",","."))
        const valueFixed = newvalue.toFixed(2);
        let prefix;
        if(type==="positive"){
          prefix = 'R$+'
        }
        if(type==="negative"){
          prefix = 'R$-'
        }

        return (
            <Transaction type={type} index={index}>
            <span>{date}</span>

            <span>{description}</span>

            <span>{prefix}{valueFixed}</span>
            </Transaction>
        );
        });
    }

    function CalculateBalance() {
        const initialValue = 0;
  
        return transactions.reduce((previousValue, currentValue) => {
        if (currentValue.type === "positive") {
            return previousValue + Number(currentValue.value.replace(",","."));
        } else {
            return previousValue - Number(currentValue.value.replace(",","."));
        }
        }, initialValue);
    }

    function RenderBalance() {
        if (transactions.length > 0) {
        const total = CalculateBalance();
        return (
            <Balance total={total}>
              <span>SALDO</span>
              <span>R${total.toFixed(2)}</span>
            </Balance>
        );
        }
    }
  
    return(
        <>
        <Header>
            <h1>Olá, {name}</h1>     
            <ion-icon onClick={()=>navigate("/")} name="log-out-outline"></ion-icon>
        </Header>
        <Page>
          <TransactionsContainer transactions={transactions}>
              <Transactions>{RenderTransactions()}</Transactions>
              {RenderBalance()}
          </TransactionsContainer>

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

const TransactionsContainer = styled.div`
  width: 90%;
  height: calc((100vh - 120px));
  background-color: #ffffff;
  border-radius: 5px;
  margin: 22px 0 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.transactions.length === 0 ? "center" : "space-between"};
  padding: 15px;
  overflow-y: scroll;
  .withouttransaction {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    color: #868686;
    line-height: 24px;
  }
`;

const Transactions = styled.div`
  height: 100%;
`;

const Transaction = styled.div`
  display: flex;
  flex-direction: row;
  :last-child {
    margin-bottom: 20px;
  }
  span {
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: #c6c6c6;
    margin-bottom: 15px;
  }
  span:nth-child(2) {
    color: #000000;
    width: 100%;
    margin-left: 8px;
    cursor: pointer;
  }
  span:nth-child(3) {
    color: ${(props) => (props.type === "positive" ? "#03AC00" : "#C70000")};
  }
  i {
    color: #c6c6c6;
    margin: 1px -5px 0 11px;
    font-size: 18px;
    line-height: 18.78px;
    cursor: pointer;
  }
`;

const Balance = styled.div`
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //position: absolute;
  bottom: 153px;
  left: 40px;
  right: 39px;
  background-color: #ffffff;
  span {
    font-family: "Raleway", sans-serif;
    font-size: 17px;
    color: #000000;
    line-height: 20px;
    font-weight: 700;
  }
  span:nth-child(2) {
    color: ${(props) => (props.total >= 0 ? "#03AC00" : "#C70000")};
    font-weight: 400;
  }
`;
