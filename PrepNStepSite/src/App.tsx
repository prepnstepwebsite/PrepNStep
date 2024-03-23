import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header"; 
//import Footer from "./components/Footer/Footer"; 
import Home from "./pages/Home/Home";
import WeeklyMenu from "./pages/WeeklyMenu/WeeklyMenu";
import MealPlans from "./pages/MealPlans/MealPlans";
import Workout from "./pages/Workout/Workout";
import Blog from "./pages/Blog/Blog";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weeklymenu" element={<WeeklyMenu />} />
        <Route path="/mealplans" element={<MealPlans />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
