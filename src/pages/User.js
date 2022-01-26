import './../style/App.css';
import '../apis/Login.js'
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer"
import Account from "../components/Account"
import Profile from "../apis/Profile"
import EditForm from "../components/EditForm"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


/**
 * @return user page
 * @func editForm - s'éxécute aau clique du bouton "Edit name" et affiche le formuaire
 */
function User() {
    Profile(localStorage.getItem('token')) // je recupére les donnéees de l'utilisateur en utilisant son token et les insére dans le store
    const datasStore = useSelector(state => state[state.length-1]) //récupére les datas stocké dans le store 
    const navigate = useNavigate();
console.log(datasStore)
    if(datasStore.datasUser !== undefined && datasStore.datasUser.datasUser !== undefined && datasStore.datasUser.datasUser.status !== 401 ) {
        let firstname = datasStore.datasUser.datasUser.body.firstName
        let lastname = datasStore.datasUser.datasUser.body.lastName
        const editForm = (e) => {
            e.target.style.display= "none"
            document.querySelector("#form-edit").style.display = "block"
        }

        return (
            <div className="user">
                <Nav/>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back<br />{firstname} {lastname}</h1>
                        <button className="edit-button" onClick={editForm}>Edit Name</button>
                        <EditForm firstname={firstname} lastname={lastname}/>
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
        // navigate("/")
        return null  
    }

}

export default User