import React, {useEffect} from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import img from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";


const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious statys and adventurous activities.",
  },

  {
    id: 2,
    imgSrc: img2,
    desTitle: "Machu Pichu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Here is what I will say: Machu Picchu is beautiful, obviously! So that made up for a lot of thr missteps of this company.",
  },

  {
    id: 3,
    imgSrc: img3,
    desTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Join us for a unique outer reef tour on the Sunlover Great Barrier Reef pontoon. Snorkel or dive the reef surrounded with beautiful coral & unique marine life.",
  },

  {
    id: 4,
    imgSrc: img4,
    desTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Discover the enchanting landscapes of Cappadocia with a hot air balloon ride! Visit us for Cappadocia tours, trips, activities and more.",
  },

  {
    id: 5,
    imgSrc: img5,
    desTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "Explore Luxury Resorts & Hotels in Guanajuato and Find the Perfect Luxury Property for Your Trip with American Express Travel.",
  },

  {
    id: 6,
    imgSrc: img6,
    desTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "Cinque Terre is a great destination for nature lovers and outdoor enthusiasts. There are plenty of hiking trails that connect the five villages.",
  },

  {
    id: 7,
    imgSrc: img7,
    desTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      " Many tour operators and travel agencies in Siem Reap offer packages that include transportation to Angkor Wat and other popular temples.",
  },

  {
    id: 8,
    imgSrc: img8,
    desTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      " Set in the heart of the city, The Taj Mahal Hotel features old-world grace and charm. Contemporary comforts complement the broad, leafy boulevards of ...",
  },

  {
    id: 9,
    imgSrc: img9,
    desTitle: "Bali Island",
    location: "Islandia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      " Our Bali Travel Guide will be your ultimate companion to your next trip to the Islands of Gods! From essential do's and don'ts to the best options for your ...",
  },
];

const Main = () => {
  // Animations

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {}

        {Data.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos='fade-up' className="singleDestination">
                {/* Here it will return single id from the map array */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{desTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees} </h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <LuClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
