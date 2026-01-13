// import React from "react"
import NavBar from "../NavBar/NavBar"

import '../CommonStyle/FrontDashBoard.css'
export default function AdminDashBoard(){
    return(
        <section id="Dashboard">
            <div className="NabBar">
                <NavBar/>
            </div>
            <div className="otherContent">
                <h3>Other content</h3>
            </div>
        </section>
    )
}