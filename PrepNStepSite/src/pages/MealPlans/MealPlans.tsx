//MealPlans.tsx

import { useState } from "react";
import "./mealplans.scss";
import MealKits from "../../assets/images/MealKits.jpg";
import MealPrep from "../../assets/images/MealPrep.jpg";

import chef from "../../assets/icons/chef.png";
import salad from "../../assets/icons/salad.png";
import muscle from "../../assets/icons/muscle.png";

interface PlanTypeOptionProps {
  type: string;
  isSelected: boolean;
  onClick: () => void;
  description: string;
  imageSrc: string;
  earlyAccess?: boolean;
}

function PlanTypeOption({
  type,
  isSelected,
  onClick,
  description,
  imageSrc,
  earlyAccess = false,
}: PlanTypeOptionProps) {
  return (
    <div
      className={`plan-type-option ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="plan-image">
        <img src={imageSrc} alt={type} />
      </div>
      <div className="plan-details">
        <div className="plan-title">
          {type}{" "}
          {earlyAccess && <span className="early-access">Early Access</span>}
        </div>
        <div className="plan-description">{description}</div>
        {isSelected && <span className="checkmark">✓</span>}
      </div>
    </div>
  );
}

const categories = [
  {
    title: "Bulking",
    description: "High-protein meals to support muscle gain and workout recovery",
    icon: muscle,
  },
  {
    title: "Cutting",
    description: "Lean recipes to help shed fat while maintaining energy",
    icon: salad,
  },
  {
    title: "Chef's Choice",
    description: "Creative dishes crafted by our expert chefs for optimal taste",
    icon: chef,
  },
  // Add more categories if necessary
];


function MealPlanSelection() {
  const [planType, setPlanType] = useState("Meal Kits");
  const [servingsPerMeal, setServingsPerMeal] = useState(2);
  const [mealsPerWeek, setMealsPerWeek] = useState(3);
  const [pricePerServing, _setPricePerServing] = useState(4.37);
  const shippingCost = 0;
// Define the state with an explicit type
const [selectedCategories, setSelectedCategories] = useState<string[]>(['Bulking']);
const [promoCode, setPromoCode] = useState("");



const calculateTotal = () => {
  let total = 0;

  // Base cost calculation
  const baseCost = servingsPerMeal * mealsPerWeek * pricePerServing;
  total += baseCost;

  // Additional categories calculation
  // Multiply the base cost by the number of selected categories
  total += (selectedCategories.length * servingsPerMeal * mealsPerWeek * pricePerServing);

  return total.toFixed(2);
};


  // Handlers
  const handleSelectCategory = (category: string) => {
    setSelectedCategories(prevSelectedCategories => {
      const isSelected = prevSelectedCategories.includes(category);
      if (isSelected) {
        // If it's already selected, we remove it from the array
        return prevSelectedCategories.filter(c => c !== category);
      } else {
        // If it's not selected, we add it to the array
        return [...prevSelectedCategories, category];
      }
    });
  };


  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Build Your Plan</h1>
          <p className="header-subtitle">
            Customized meal plans for healthy living
          </p>
        </div>
      </div>
      <div className="meal-plans">
        <div>
          <h2 className="step">1. Choose your meal style</h2>
        </div>
        {/* Categories Section */}
        <div className="categories-section">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`category-item ${
                selectedCategories.includes(category.title) ? "selected" : ""
              }`}
              onClick={() => handleSelectCategory(category.title)}
            >
              <img src={category.icon} alt={category.title} />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>

        {/* Start of the Build your Plan */}
        <div>
          <h2 className="step">2. Choose how you want your meal prepared</h2>
        </div>

        <div className="plan-container">
          <div className="left-column">
            <div className="plan-type-selector">
              <PlanTypeOption
                type="Meal Kits"
                isSelected={planType === "Meal Kits"}
                onClick={() => setPlanType("Meal Kits")}
                description="Ingredients and easy-to-follow recipes for home-cooked meals"
                imageSrc={MealKits} // Replace with actual image path
              />
              <PlanTypeOption
                type="Prepared & Ready"
                isSelected={planType === "Prepared & Ready"}
                onClick={() => setPlanType("Prepared & Ready")}
                description="Pre-made meals delivered fresh ready in as little as 2 minutes"
                imageSrc={MealPrep} // Replace with actual image path
              />
            </div>

            <div className="description">
              {planType === "Meal Kits"
                ? "Ingredients and easy-to-follow recipes for home-cooked meals"
                : "Pre-made meals delivered fresh and ready in as little as 2 minutes."}
            </div>
          </div>
          <div>
            <h2 className="step">3. Select your prefrence of quantity</h2>
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
      <div className="promo-section">
        <div className="PromoHeader">
          <h2>Enter Your Promo For a Discount on Meals</h2>
        </div>
        <div className="promo-input-group"> 
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="promo-input"
          />
          <button
            className="promo-submit-button"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default MealPlanSelection;
