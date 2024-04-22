import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/keralabg.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About (){
    return(
        <>
          <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Explore the world with us for the best travel experience"
        btnClass="hide"
      ></Hero>
      <AboutUs></AboutUs>
      <Footer></Footer>
        </>
    )
}

export default About