import { useState, useEffect, useRef } from "react";
import "./home.scss";

// Import images
import imagecarousel1 from "../../assets/images/ordering.png";
import imagecarousel2 from "../../assets/images/deliver.jpg";
import imagecarousel3 from "../../assets/images/workingout.jpg";

const images = [imagecarousel1, imagecarousel2, imagecarousel3];

// Front image carousel items
const baseTitle = "Your";
const changingWords = ["Pick", "Order", "Workout"];
const unifiedImageDescription =
  "Discover the ideal meal plan that complements your lifestyle, delivering nutrition and convenience to enhance your daily routine and fitness goals.";

//Why PrepNStep items
import convenienceImg from "../../assets/images/mobile-notch.png";
import dealImg from "../../assets/images/piggy-bank.png";
import qualityImg from "../../assets/images/grocery-basket.png";
import flavorImg from "../../assets/images/restaurant.png";


const reasons = [
  {
    title: "Seamless Convenience",
    description: "Maximize your time with our easy, efficient ordering process that saves you both time and expense.",
    imgSrc: convenienceImg,
  },
  {
    title: "Dual Benefit Plan",
    description: "Experience the synergy of tailored workouts paired with personalized nutrition plans for optimal health.",
    imgSrc: dealImg,
  },
  {
    title: "Pristine Ingredients",
    description: "Discover the difference with our hand-selected ingredients, proudly sourced from local artisans and farmers.",
    imgSrc: qualityImg,
  },
  {
    title: "Culinary Delights",
    description: "Indulge in a culinary adventure with meals that are as nourishing as they are delightful to the palate.",
    imgSrc: flavorImg,
  },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const typingTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCharIndex(0); // Reset character index for new word
    }, 5000); // Rotate images every 9 seconds

    return () => {
      clearInterval(interval);
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current); // Clean up typing effect on unmount
      }
    };
  }, []);

  useEffect(() => {
    typingTimeoutRef.current = setTimeout(() => {
      const word = changingWords[currentImageIndex];
      setTypedWord(word.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      // Reset if the word is complete
      if (charIndex === word.length) {
        if (typingTimeoutRef.current !== null) {
          clearTimeout(typingTimeoutRef.current);
        }
      }
    }, 200); // Speed of typing effect

    return () => {
      if (typingTimeoutRef.current !== null) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [charIndex, currentImageIndex]);

  return (
    <>
    {/* //Beginning of image carousel */}
      <div className="carousel">
        <div className="carousel-box">
          <div className="text-center">
            <div className="title-box">
              <h2>
                {baseTitle} <span className="typed-word">{typedWord}</span>
              </h2>
              <h2>to Elevate Your Lifestyle</h2>
            </div>
            <p>{unifiedImageDescription}</p>
          </div>
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentImageIndex ? "active" : ""
            }`}
          >
            <img src={image} alt={`Slide ${index}`} />
            <div className="overlay"></div>
          </div>
        ))}
      </div>

      {/* Beginning of Why PrepNStep */}
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div className="reason" key={index}>
            <img
              src={reason.imgSrc}
              alt={reason.title}
              className="reason-image"
            />
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>

      {/* Beginning of Reviews */}
      <h2>Reviews</h2>

    </>
  );
};

export default Home;
