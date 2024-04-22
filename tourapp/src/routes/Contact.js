import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../assests/rajasthan.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact (){
    return(
        <>
            <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact"
        btnClass="hide"
      ></Hero>
      <ContactForm></ContactForm>
      <Footer></Footer>
        </>
    )
}

export default Contact