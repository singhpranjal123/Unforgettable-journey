import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import serviceImg from "../assests/maldivesbg.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service (){
    return(
        <>
        <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={serviceImg}
        title="Explore the world with us for the best travel experience"
        btnClass="hide"
      ></Hero>
      <Trip></Trip>
      <Footer></Footer>
        </>
    )
}

export default Service