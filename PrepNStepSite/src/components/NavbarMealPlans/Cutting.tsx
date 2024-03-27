import { useState } from "react";
import "../../pages/MealPlans/mealplans.scss"



import wellness from "../../assets/weeklyMenu/wellness.png";



function MealPlans() {
  const [planType, setPlanType] = useState("Meal Kits");
  const [servingsPerMeal, setServingsPerMeal] = useState(2);
  const [mealsPerWeek, setMealsPerWeek] = useState(3);
  const [pricePerServing, _setPricePerServing] = useState(4.37);
  const shippingCost = 0;

  const calculateTotal = () => {
    return (servingsPerMeal * mealsPerWeek * pricePerServing).toFixed(2);
  };

  const mealOptions = [
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: wellness,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: wellness,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: wellness,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: wellness,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: wellness,
      tag: "KETO FRIENDLY",
    },
    {
      name: "Pesto & Roasted Red Pepper Pan Pizza",
      description: "with Arugula Salad & Almonds",
      prepTime: "40 MIN",
      image: wellness,
      tag: "KETO FRIENDLY",
    },

  ];

  return (
    <>
    {/* Begging of the navbar */}
      <div className="meal-kits-page">
        <header className="meal-kits-header">
          <nav className="meal-kits-nav">
            <ul>
              <li>
                <a href="/mealplans">Meal Kits</a>
                <span>2 servings</span>
              </li>
              <li>
                <a href="/MuscleGain">Muscle Gain</a>
                <span>4 servings</span>
              </li>
              <li className="active">
                <a href="/Cutting">Cutting</a>
                <span>1 serving</span>
              </li>
              <li>
                <a href="/ChefsChoice">Chefs Choice</a>
                <span>Servings vary</span>
              </li>
            </ul>
          </nav>

          <h1>Wellness</h1>
          <p>
            An ever-changing mix of easy-to-follow recipes perfectly portioned
            for one.
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

      
    </>
  );
}

export default MealPlans;
