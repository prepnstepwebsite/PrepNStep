import React, { useState, useEffect, useRef } from "react";
import "./home.scss";

// Import images
import image1 from "../../assets/images/ordering.png";
import image2 from "../../assets/images/deliver.jpg";
import image3 from "../../assets/images/workingout.jpg";

const images = [image1, image2, image3];
// Common title and variable words
const baseTitle = "Your";
const changingWords = ["Pick", "Order", "Workout"];
const unifiedImageDescription =
  "Discover the ideal meal plan that complements your lifestyle, delivering nutrition and convenience to enhance your daily routine and fitness goals.";

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
  <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}>
    <img src={image} alt={`Slide ${index}`} />
    <div className="overlay"></div>
  </div>
))}
    </div>
  );
};

export default Home;
