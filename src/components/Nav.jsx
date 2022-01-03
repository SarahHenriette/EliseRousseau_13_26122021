import logo from "./../img/argentBankLogo.png"
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux"

/**
 * @return nav
 */
function Nav() {
  const datasUser = useSelector((state)=> state[2])
// console.log(datasUser.datasUser.token.body)
    return (
    <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
      <div>
          <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i> 
            {datasUser !== undefined ? " " + datasUser.datasUser.token.body.firstName + " " : " Sign in "}
            {datasUser !== undefined ? <i className="fa fa-sign-out"></i> : ""}
            {datasUser !== undefined ? " Sign Out" : ""}
          </Link>
      </div>
    </nav>
    )
}

export default Nav