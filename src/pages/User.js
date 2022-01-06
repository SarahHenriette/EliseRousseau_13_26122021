import './../style/App.css';
import '../apis/Login.js'
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer"
import Account from "../components/Account"
import Profile from "../apis/Profile"
import {  useSelector,  useDispatch } from "react-redux"


/**
 * @return user page
 */
function User() {
    const datas = Profile(localStorage.getItem('token')) // je recupére les donnéees de l'utilisateur en utilisant son token
    const datasStore = useSelector(state => state[state.length-1])
    const dispatch = useDispatch()

    if(Object.keys(datas.data).length !== 0 && datasStore.datasUser !== undefined && datasStore.datasUser.datasUser !== undefined) {
        // console.log(datas.data)
        let firstname = datasStore.datasUser.datasUser.body.firstName
        let lastname = datasStore.datasUser.datasUser.body.lastName
        const editForm = (e) => {
            e.target.style.display= "none"
            document.querySelector("#form-edit").style.display = "block"
        }

        const cancelForm = (e) => {
            document.querySelector("#form-edit").style.display = "none"
            document.querySelector(".edit-button").style.display = "inline-block"
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            console.log("update")
            console.log(document.getElementById('firstname-form-edit').value)
            fetch('http://localhost:3001/api/v1/user/profile', {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*",
                "Authorization": "Bearer" + localStorage.getItem('token')
            },
            body: JSON.stringify({
                firstName: document.getElementById('firstname-form-edit').value,
                lastName: document.getElementById('lastname-form-edit').value
            })
            }).then(response => response.json()
            ).then((data) => {
                console.log(data)
                dispatch({type: "DATAS_ACTIONS", payload:{datasUser: data}})
                document.querySelector("#form-edit").reset()
                cancelForm()

            }).catch(error=> {
                console.log(error.message)
                alert("Erreur de saisie")
            })
            
        }
        return (
            <div className="user">
                <Nav/>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back<br />{firstname} {lastname}</h1>
                        <button className="edit-button" onClick={editForm}>Edit Name</button>
                        <form id="form-edit"  onSubmit={handleSubmit}>
                            <input type="text"  placeholder={firstname} id="firstname-form-edit"/>
                            <input type="text" placeholder={lastname} id="lastname-form-edit"/>
                            <br/>
                            <input type="submit" value="Save"/>
                            <input type="button" value="Cancel" onClick={cancelForm}/>
                        </form>
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