import "./Trip.css";
import image1 from "../assests/goa/port2.jpg";
import image2 from "../assests/kerala/port2.jpg";
import image3 from "../assests/uttarakhand/pack2.jpg";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>
        {" "}
        Recent trip was an incredible adventure, filled with new experiences and
        unforgettable moments.
        <br />
        Discover Your Unique Destination.
      </p>
      <div className="tripcard">
        <TripData
          image={image1}
          heading="Trip TO GOA"
          text="Discover the captivating beauty of Goa, a coastal paradise known for its stunning beaches, vibrant nightlife, and rich Portuguese heritage. Relax on the golden sands of Baga and Calangute, or seek solitude on the serene beaches of Palolem and Agonda. Explore the charming streets of Panaji, adorned with colorful colonial architecture and quaint cafes."
        />
         <TripData
          image={image2}
          heading="Trip TO KERALA"
          text="Explore the enchanting landscapes of Kerala, known as 'God's Own Country.' This lush, tropical paradise offers serene backwaters, tranquil beaches, and dense green forests. Drift along the Alleppey backwaters in a traditional houseboat, or soak in the serene beauty of Munnar's tea plantations. Kerala's vibrant culture comes alive in its traditional dance performances like Kathakali and Theyyam. "
        />
         <TripData
          image={image3}
          heading="Trip TO UTTARAKHAND"
          text=
          "Discover the pristine beauty of Uttarakhand, a breathtaking destination nestled in the Himalayan foothills. Known as the 'Land of the Gods,' this region offers a mix of spiritual, adventurous, and natural experiences. Visit the sacred cities of Rishikesh and Haridwar for spiritual enlightenment and yoga retreats. Embark on treks through picturesque valleys and towering mountains, including the renowned Valley of Flowers and the challenging Roopkund Trek."
        />
      </div>
    </div>
  );
}

export default Trip;
