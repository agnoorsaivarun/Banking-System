import React ,{ useState,useEffect } from "react";
import Header from '../header/header'
import Footer from '../footer/footer'

const History=  ()=>{
    const [hist,setHist]=useState([])
  useEffect(()=>{
    fetch('https://bankserver.onrender.com/tranhistory')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.reverse()
        setHist(data)
        console.log(data);
    }).catch((e) => {
        console.log(e.message);
    })
  },[])
    return(
        <>
        <Header/>
        <ul>
         {
            hist.map((ele,ind)=>{
                return <li key={`statement${ind+1}`}>{ele.statement}</li>
            })
         }
        </ul>
        <Footer/>
        </>
    )
}

export default History;