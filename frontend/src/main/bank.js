import { useEffect, useState } from "react";
import GripHeader from "../header/header";
import "./bank.css"
import TableBody from "./table-body";
import React from "react";
const BankPage =  () => {

    const [userData, setUserData] = useState([]);

  useEffect(() => {
        fetch('https://bankserver.onrender.com/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUserData(data)
                console.log(data);
            }).catch((e) => {
                console.log(e.message); 
            })
    }, [])

    return (
        <>
            <GripHeader />
            <br className="m-10" />
            <TableBody userData={userData}/>  
        </>
    )
}

export default BankPage;