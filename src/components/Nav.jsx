import logo from "./../img/argentBankLogo.png"
import { Link } from "react-router-dom";
import {  useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

/**
 * @return navbar
 * @func handleSubmit - s'éxécute au clique du bouton Sign Out
 */
function Nav() {


  const datasUser = useSelector((state)=> state[state.length-1])
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('deco')
    dispatch({type: "LOGOUT_ACTIONS"})
    localStorage.removeItem('token')
    localStorage.removeItem('firstname')
    localStorage.removeItem('lastname')
  
    navigate("/")

  }
  return (
    <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
      <div>       
        {/*if user is logged : display link with name  */}
      {datasUser.isLogged !== false && datasUser.datasUser !== undefined ?
      <Link to="/user" className="main-nav-item"> <i className="fa fa-user-circle"></i> {datasUser.datasUser.datasUser.body.firstName}</Link>:
      ""}

        {/*if user is logged : display link sign Out  */}
      {datasUser.isLogged !== false ?
      <Link to="/" className="main-nav-item" onClick={handleSubmit}> <i className="fa fa-sign-out" ></i> Sign Out</Link>:
      <Link to="/signin" className="main-nav-item"> <i className="fa fa-user-circle"></i> Sign in</Link>}


      </div>
    </nav>
    )
}

export default Nav