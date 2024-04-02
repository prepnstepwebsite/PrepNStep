import { useState, useEffect } from "react";
import "./blog.scss";
import Modal from "react-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRunning,
  faDumbbell,
  faPeace,
  faBiking,
  faStopwatch,
  faDrumstickBite,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import Article1 from "../../assets/articles/Article1.jpg";
import Article2 from "../../assets/articles/Article2.jpg";
import Article3 from "../../assets/articles/Article3.jpg";
import Article4 from "../../assets/articles/Article4.jpg";
import Article5 from "../../assets/articles/Article5.jpg";
import Article6 from "../../assets/articles/Article6.jpg";
import Article7 from "../../assets/articles/Article7.jpg";

Modal.setAppElement("#root"); // This should be set to the id of your app root element

function Blog() {
  type Article = {
    imageUrl: string;
    icon: IconDefinition; // This should not be optional to satisfy FontAwesomeIcon's requirements
    date: string;
    title: string;
    description: string;
  };

  // State to manage modal visibility
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Check if the modal was already shown in this session
    const modalShown = sessionStorage.getItem("modalShown");
    if (!modalShown) {
      setModalIsOpen(true); // Show the modal only if it hasn't been shown in the session
    }
  }, []);

  // Function to handle closing the modal
  const closeModal = () => {
    setModalIsOpen(false);
    sessionStorage.setItem("modalShown", "true"); // Set a flag in session storage
  };

  const articles: Article[] = [
    {
      imageUrl: Article1,
      icon: faStopwatch,
      date: "20 March, 2024",
      title: "High-Intensity Interval Training: A Time-Efficient Workout",
      description:
        "HIIT routines can help you achieve fitness goals in shorter sessions. Discover workouts that fit your busy schedule.",
    },
    {
      imageUrl: Article2,
      icon: faDrumstickBite,
      date: "18 February, 2024",
      title: "The Power of Protein: Meal Plans for Muscle Growth",
      description:
        "Learn how to increase your protein intake with delicious and nutritious meal plans designed for muscle building and recovery.",
    },
    {
      imageUrl: Article3,
      icon: faDumbbell,
      date: "12 February, 2024",
      title: "Building Your Budgetable Home Gym: Essential Equipment",
      description:
        "From resistance bands to weights, find out what essentials you need to build an effective home gym without breaking the bank.",
    },
    {
      imageUrl: Article4,
      icon: faBiking,
      date: "10 January, 2024",
      title:
        "Eco-Friendly Fitness: Sustainable Practices for Health Enthusiasts",
      description:
        "Discover how to make your fitness routine more eco-friendly with sustainable gear, practices, and eco-conscious workout choices.",
    },
    {
      imageUrl: Article5,
      icon: faPeace,
      date: "8 January, 2024",
      title:
        "Yoga for Life: Postures to Enhance Physical and Mental Well-being",
      description:
        "Dive into the world of yoga and discover postures that promote flexibility, strength, and peace of mind.",
    },
    {
      imageUrl: Article6,
      icon: faRunning,
      date: "5 December, 2023",
      title: "Runners' Retreat: Essential Tips for Marathon Preparation",
      description:
        "Whether you're a beginner or a seasoned marathoner, find essential tips to boost your running performance and endurance.",
    },
    {
      imageUrl: Article7,
      icon: faPeace,
      date: "15 October, 2023",
      title:
        "Mindfulness and Movement: Enhancing Your Workouts with Meditation",
      description:
        "Integrate mindfulness into your workout routine to improve mental clarity and enhance focus, leading to better exercise outcomes.",
    },
  ];

  return (
    <>
      {/* Modal code */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Newsletter Sign-Up"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="modal-close-x" onClick={closeModal}>
          &times;
        </button>

        <div className="newsletter-modal">
          <div className="newsletter-image-side">
            {/* Image side - add a relevant image */}
          </div>
          <div className="newsletter-form-side">
            <h2>Stay Updated</h2>
            <p>Sign up for the latest in food and fitness trends.</p>
            <form>
              <input type="email" placeholder="Email address" required />
              <button type="submit">Sign Up</button>
            </form>
            <button className="modal-close-button" onClick={closeModal}>
              No Thanks
            </button>
          </div>
        </div>
      </Modal>

      {/* Beginning of Header */}
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Fitness & Nutrition Insights</h1>
          <p className="header-subtitle">
            Dive into the latest trends, tips, and recipes to elevate your
            fitness and meal prep game
          </p>
        </div>
      </div>
      {/* Articles Container */}
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image-container">
              <img
                src={article.imageUrl}
                alt="Blog Post"
                className="blog-image"
              />
              {article.icon && (
                <span className="blog-image-icon">
                  <FontAwesomeIcon icon={article.icon} />
                </span>
              )}
            </div>
            <div className="blog-info">
              <p className="blog-date">{article.date}</p>
              <h2 className="blog-title">{article.title}</h2>
              <p className="blog-description">{article.description}</p>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Blog;
