import { useState, useRef } from "react";
import "./weeklymenu.scss";

import craft from "../../assets/weeklyMenu/craft.png";

function WeeklyMenu() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  function handleClick() {
    window.location.href = '/mealplans';
  }
  


  const mealOptions = [
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: craft,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: craft,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: craft,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: craft,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: craft,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: craft,
      tag: "KETO FRIENDLY",
    },
  ];

  const faqItems = [
    {
      question: "How does the meal subscription service work?",
      answer:
        "Our meal subscription service allows you to choose from a variety of meal plans and have them delivered to your doorstep on a weekly basis. You can customize your plan based on your dietary preferences and number of servings.",
    },
    {
      question: "Can I pause or cancel my subscription?",
      answer:
        "Yes, you can pause or cancel your subscription at any time through your account settings or by contacting our customer service team.",
    },
    {
      question: "Are there vegetarian or vegan meal options available?",
      answer:
        "Absolutely! We offer a diverse selection of meal options that cater to vegetarian and vegan diets. Our menu changes regularly to provide fresh and seasonal ingredients.",
    },
    {
      question: "How are the ingredients for the meals sourced?",
      answer:
        "We prioritize sustainability and quality in our sourcing. Ingredients are organically grown and sourced from local farms whenever possible, ensuring that you receive the freshest produce while also supporting local agriculture.",
    }
  ];


  const faqRefs = useRef<(HTMLDivElement | null)[]>(new Array(faqItems.length).fill(null));


  const toggleFAQ = (index: number) => {
    const current = faqRefs.current[index];
    if (!current) return;

    setActiveIndex(activeIndex === index ? null : index);
    current.style.maxHeight = activeIndex === index ? '0px' : `${current.scrollHeight}px`;
  };

  return (
    <>
      {/* Begging of the navbar */}
      <div className="meal-kits-page">
        <header className="meal-kits-header">
          <nav className="meal-kits-nav">
            <ul>
              <li className="active">
                <a href="/weeklymenu">Meal Kits</a>
                <span>2 servings</span>
              </li>
              <li>
                <a href="/MuscleGain">Muscle Gain</a>
                <span>4 servings</span>
              </li>
              <li>
                <a href="/Cutting">Cutting</a>
                <span>1 serving</span>
              </li>
              <li>
                <a href="/ChefsChoice">Chefs Choice</a>
                <span>Servings vary</span>
              </li>
            </ul>
          </nav>

          <h1>Meal Kits</h1>
          <p>
            An ever-changing mix of easy-to-follow recipes perfectly portioned
            for two.
          </p>
          <div className="week-and-plans">
            <h2 className="week-title">Week of April 1st</h2>
            <button onClick={handleClick}  className="see-plans-button">SEE PLANS</button>
          </div>
        </header>

        {/* Beginning of the Week meals */}
        <div className="meal-options">
          {mealOptions.map((meal, index) => (
            <div className="meal-option" key={index}>
              <a href="/meal-detail" className="meal-card">
                <img src={meal.image} alt={meal.name} />
                <div className="meal-tag">{meal.tag}</div>
                <div className="meal-info">
                  <div className="meal-name">{meal.name}</div>
                  <div className="meal-description">{meal.description}</div>
                  <div className="meal-prep-time">
                    <svg
                      className="clock-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    40 MIN
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

 
      {/* FAQ Section */}
      <section className="faq-section">
      <div className="container">
        <div className="faq-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-content">
        {faqItems.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            <div
              className="faq-answer"
              ref={(el) => faqRefs.current[index] = el}
              // Remove the inline style for display
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
    </>
  );
}

export default WeeklyMenu;
