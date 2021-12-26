import './../style/App.css';
import '../apis/Login.js'
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer"
import Account from "../components/Account"
import Profile from "../apis/Profile"
import {  useSelector } from "react-redux"


function User() {
    const state = useSelector((state)=> state[1]) //je récupére les states
    const datas = Profile(state.token) // je recupére les donnéees de l'utilisateur en utilisant son token
    //Lorsque les données sont récup j'affiche la vue
    if(Object.keys(datas.data).length !== 0) {
        console.log(datas.data)
        return (
            <div className="user">
                <Nav/>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back<br />Tony Jarvis!</h1>
                        <button className="edit-button">Edit Name</button>
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
                    <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
                    <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
                </main>
                <Footer/>
            </div>
        )
    }else {
        return null
    }

}

export default User