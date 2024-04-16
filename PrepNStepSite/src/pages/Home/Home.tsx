import { useState, useEffect, useRef } from "react";
import { ReviewCard } from "../../components/Reviews/Reviews";
import socialReviews from "../../assets/images/Reviews.png";
import weeklyMenuData from "./weeklyMenu";
import reviews from "./reviewsData";
import "./home.scss";

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
    description:
      "Maximize your time with our easy, efficient ordering process that saves you both time and expense.",
    imgSrc: convenienceImg,
  },
  {
    title: "Dual Benefit Plan",
    description:
      "Experience the synergy of tailored workouts paired with personalized nutrition plans for optimal health.",
    imgSrc: dealImg,
  },
  {
    title: "Pristine Ingredients",
    description:
      "Discover the difference with our hand-selected ingredients, proudly sourced from local artisans and farmers.",
    imgSrc: qualityImg,
  },
  {
    title: "Culinary Delights",
    description:
      "Indulge in a culinary adventure with meals that are as nourishing as they are delightful to the palate.",
    imgSrc: flavorImg,
  },
];

interface WeeklyMenuItemProps {
  category: string;
  title: string;
  imageUrl: string;
}

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const reviewCount = reviews.length;
  const actualSlideIndex = useRef(0);
  const combinedReviews = [...reviews, ...reviews];

  useEffect(() => {
    const timer = setInterval(() => {
      if (sliderRef.current) {
        // Checking if sliderRef.current is not null
        actualSlideIndex.current =
          (actualSlideIndex.current + 1) % combinedReviews.length;
        if (actualSlideIndex.current === reviewCount) {
          sliderRef.current.style.transition = "none"; // Directly manipulate the DOM node
          setSlideIndex(0);
          actualSlideIndex.current = 0;

          // Forcing reflow
          sliderRef.current.offsetHeight;

          // Reapply transition
          requestAnimationFrame(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = "transform 5s linear";
            }
          });
        } else {
          setSlideIndex(actualSlideIndex.current);
        }
      }
    }, 5000);

    return () => clearInterval(timer);
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

  // Weekly menu item component
  const WeeklyMenuItem: React.FC<WeeklyMenuItemProps> = ({
    category,
    title,
    imageUrl,
  }) => {
    return (
      <div className="weekly-menu-item">
        <img src={imageUrl} alt={title} className="weekly-menu-image" />
        <div className="weekly-menu-category">{category}</div>
        <div className="weekly-menu-title">{title}</div>
      </div>
    );
  };

  return (
    <>
      {/* Beginning of image carousel */}
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

      {/* Beginning of Weekly Menu */}
      <section className="weekly-menu">
        <h1>Choose from</h1>
        <h2>20+ weekly options</h2>
        <div className="weekly-menu-container">
          {weeklyMenuData.map((item, index) => (
            <WeeklyMenuItem
              key={index}
              category={item.category}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        <div className="menu-button-container">
  <button className="menu-button" onClick={() => window.location.href = '/WeeklyMenu'}>
    BROWSE OUR MENUS
  </button>
</div>
      </section>

      {/* Beginning of Reviews */}
      <div className="reviews-heading">
        <h2 className="text-center">Hear it from Our Happy Customers</h2>
        <p className="text-center subtitle">
          Real stories from satisfied patrons
        </p>
        <div className="centered-image">
          <img src={socialReviews} alt="Customer Satisfaction" />
        </div>
      </div>
      <div className="reviews-container">
        <div
          ref={sliderRef} // Attach the ref here
          className="reviews-slider"
          style={{
            transform: `translateX(-${slideIndex * (450 + 24)}px)`,
          }}
        >
          {combinedReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
