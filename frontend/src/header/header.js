import "./header.css";
import { Link } from "react-router-dom";
import React from "react";

const GripHeader = () => {
    return (
        <>
            <header className="text-gray-600 body-font bg-[#2699fb] p-4 mb-0">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="logo.png" className="rounded-full" height="78px" width="75px"></img>
                        <span className="ml-3 text-4xl">Grip Bank</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900 text-xl" >Home</Link>
                        <a className="mr-5 hover:text-gray-900 text-xl" href="#footer">Contact us</a>
                        <Link to="/signup" className="mr-5 hover:text-gray-900 text-xl">Create User</Link>
                        <Link to="/users" className="mr-5 hover:text-gray-900 text-xl">View Customers</Link>
                        <Link to="/tranhistory" className="mr-5 hover:text-gray-900 text-xl">Transaction History</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default GripHeader