import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from '../header/header'
import Footer from "../footer/footer";
const CreateUser = ()=>{
    const navigate = useNavigate();
 let [name,setName]=useState("")
 let [email,setEmail]=useState("")
 let [account,setAccount]=useState("")
 let [balance,setBalance]=useState("")
    const handleSubmit= async (e)=>{
        e.preventDefault();
        await axios.post('https://bankserver.onrender.com/users',
            {
                name:name,
                email:email,
                account:account,
                balance:balance
            }).then((d) => {
                console.log(d)
                alert("user created succefully")
            }).catch((e) => { console.log(e.message) }).finally(() => { navigate("/users") })
    }
    return(
        <>
        <Header/>
         <div className="w-full max-w-xs m-60 mt-20 my-40">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name" name="name">
                                Name
                            </label>
                            <input value={name} onChange={e=> setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" name="name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input value={email} onChange={e=> setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" name="email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account">
                                Account Number
                            </label>
                            <input value={account} onChange={e=> setAccount(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="text" placeholder="Account Number" name="account" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="balance">
                                Balance
                            </label>
                            <input value={balance} onChange={e=> setBalance(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="balance" type="text" placeholder="Balance" name="balance" />
                        </div>

                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
         <Footer/>
        </>
    )
}
export default CreateUser;