import './../style/App.css';
// import Login from '../api.js'
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer"
import Form from "./../components/Form"

function SignIn() {

    return (
        <div className="signIn">
            <Nav/>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default SignIn





// function Home() {
//   return (
//     <div className="Home">
//       <Nav/>
//       <main>
//         <Hero/>
//         <Features/>
//       </main>
//       <Footer/>
//     </div>
//   );
// }

// export default Home;
