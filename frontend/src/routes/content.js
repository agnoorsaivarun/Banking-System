import { BrowserRouter, Routes, Route} from "react-router-dom";

import App from "../App";
import BankPage from "../main/bank";
import TransferPage from "../main/transfer";
import CreateUser from "../main/user";
import History from '../main/history'
import React from "react";


const ContentRoute = ()=>{
 
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/users" element={<BankPage />}/>
            <Route path="/transfers" element={<TransferPage/>}/>
            <Route path="/signup" element={<CreateUser/>}/>
            <Route path="/tranhistory" element={<History/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default ContentRoute;