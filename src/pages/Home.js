import './../style/App.css';
import '../Login.js'
import '../redux/Store'
import Nav from "../components/Nav.jsx"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Footer from "../components/Footer"



function Home() {
  return (
    <div className="home">
      <Nav/>
      <main>
        <Hero/>
        <Features/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
