import {React,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import CadastreScreen from "./CadastreScreen";
import Aplication from "./Aplication";
import Add from "./Add";
import Remove from "./Remove";
import UserContext from "../context/UserContext";

export default function App(){
    const [user, setUser] = useState({});
    return(
        <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen/>} />
                <Route path="/cadastro" element={<CadastreScreen/>} />
                <Route path="/main" element={<Aplication/>} />
                <Route path="/add" element={<Add/>} />
                <Route path="/remove" element={<Remove/>} />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}

