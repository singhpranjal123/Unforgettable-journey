import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeImg from "../assests/himachalbg.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero"
        heroImg={homeImg}
        title="Discover the World with Us: Unforgettable Journeys Await!"
        text="Embark on a journey of a lifetime with us! From sun-kissed beaches to majestic mountains, we offer tailored experiences that cater to your wanderlust. Let us take care of the details so you can focus on making memories that will last a lifetime."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      ></Hero>


      <Destination></Destination>
      <Trip/>
      <Footer></Footer>
    </>
  );
}

export default Home;
