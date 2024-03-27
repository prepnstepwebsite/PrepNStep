import { useState, useRef } from "react";
import "../../pages/MealPlans/mealplans.scss"


import pasta from "../../assets/weeklyMenu/pasta.png";


function MealPlans() {
  const [planType, setPlanType] = useState("Meal Kits");
  const [servingsPerMeal, setServingsPerMeal] = useState(2);
  const [mealsPerWeek, setMealsPerWeek] = useState(3);
  const [pricePerServing, _setPricePerServing] = useState(4.37);
  const shippingCost = 0;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const calculateTotal = () => {
    return (servingsPerMeal * mealsPerWeek * pricePerServing).toFixed(2);
  };

  const mealOptions = [
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: pasta,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: pasta,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: pasta,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: pasta,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: pasta,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: pasta,
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
              <li>
                <a href="/weeklymenu">Meal Kits</a>
                <span>2 servings</span>
              </li>
              <li className="active">
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

          <h1>Muscle Gain</h1>
          <p>
            An ever-changing mix of easy-to-follow recipes perfectly portioned
            for four.
          </p>
          <div className="week-and-plans">
            <h2 className="week-title">Week of April 1st</h2>
            <button className="see-plans-button">SEE PLANS</button>
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


      {/* Start of the Build your Plan */}
      <div className="meal-plans">
        <div className="plan-container">
          <div className="left-column">
            <div className="header">Build your plan</div>
            <div className="plan-type-selector">
              <button
                className={`plan-type-option ${
                  planType === "Meal Kits" ? "selected" : ""
                }`}
                onClick={() => setPlanType("Meal Kits")}
              >
                Meal Kits
              </button>
              <button
                className={`plan-type-option ${
                  planType === "Prepared & Ready" ? "selected" : ""
                }`}
                onClick={() => setPlanType("Prepared & Ready")}
              >
                Prepared & Ready
              </button>
            </div>
            <div className="description">
              Ingredients and easy-to-follow recipes for home-cooked meals
            </div>
          </div>
          <div className="right-column">
            <div className="selectors">
              <div className="servings-selector">
                <label>Servings per meal</label>
                <div className="buttons-row">
                  {[2, 4].map((number) => (
                    <button
                      key={number}
                      className={`selector-button ${
                        servingsPerMeal === number ? "active" : ""
                      }`}
                      onClick={() => setServingsPerMeal(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>
              <div className="meals-selector">
                <label>Meals per week</label>
                <div className="buttons-row">
                  {[2, 3, 4, 5].map((number) => (
                    <button
                      key={number}
                      className={`selector-button ${
                        mealsPerWeek === number ? "active" : ""
                      }`}
                      onClick={() => setMealsPerWeek(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="price-display">
              <div className="price-per-serving">
                {`$${pricePerServing.toFixed(2)} per serving`}
              </div>
              <div className="shipping">
                {shippingCost === 0 ? "FREE" : `$${shippingCost}`} shipping
              </div>
              <div className="total-price">{`$${calculateTotal()} total`}</div>
              <div className="discount-note">
                Enjoy 65% off the first five weeks of your new subscription.
              </div>
            </div>
          </div>
        </div>
        <button className="continue-button">CONTINUE</button>
        <div className="cancellation-note">
          Skip, pause, or cancel at any time.
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

export default MealPlans;
