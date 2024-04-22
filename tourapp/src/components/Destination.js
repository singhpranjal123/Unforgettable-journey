import delImage1 from "../assests/delhi/arch1.jpg";
import delImage2 from "../assests/delhi/pack1.jpg";
import gujImage1 from "../assests/gujrat/gujratbg.jpg";
import gujImage2 from "../assests/gujrat/port2.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination </h1>
      <p>Experience the magic. Your adventure begins here!"</p>
      <DestinationData
      cName="first-des"
        heading="Delhi"
        text="Embark on an unforgettable journey through the heart of India with a tour of Delhi. This dynamic city seamlessly blends ancient history with modern vibrancy. Explore iconic landmarks such as the Red Fort, Qutub Minar, and Humayun's Tomb, each with its own captivating story. Wander through bustling markets like Chandni Chowk, where the colors, aromas, and sounds create a sensory feast. Delight in the rich flavors of Delhi's street food, from spicy chaats to sizzling kebabs. Experience the lively culture, from traditional dances to contemporary art. Whether you're soaking in the serene beauty of Lodhi Gardens or marveling at the architectural wonders, Delhi offers a truly enriching experience for every traveler."
        img1={delImage1}
        img2={delImage2}
      />
       <DestinationData
       cName="first-des-reverse"
        heading="Gujrat"
        text="Explore the diverse beauty of Gujarat, a state rich in history, culture, and natural wonders. Begin your journey in Ahmedabad, where modernity meets tradition in stunning landmarks like Sabarmati Ashram and the intricately designed Adalaj Stepwell. Discover the vibrant markets of Vadodara and Surat, renowned for their textiles and handicrafts. Visit the famous Rann of Kutch for a mesmerizing landscape and unique local festivals. Don't miss the ancient archaeological site of Lothal and the majestic Gir Forest National Park, home to the majestic Asiatic lion. Gujarat's blend of tradition, heritage, and breathtaking scenery offers a captivating experience for every traveler."
        img1={gujImage1}
        img2={gujImage2}
      />
    </div>
  );
};
export default Destination;
