import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from '../../pages/Home/Home';
import WeeklyMenu from '../../pages/WeeklyMenu/WeeklyMenu';
import MealPlans from '../../pages/MealPlans/MealPlans';
import Workout from '../../pages/Workout/Workout';
import Blog from '../../pages/Blog/Blog';
import MuscleGain from '../../pages/MuscleGain/MuscleGain';
import Cutting from '../../pages/Cutting/Cutting';
import ChefsChoice from '../../pages/ChefsChoice/ChefsChoice';
import NotFoundPage from '../../pages/404/404';
import ScrollToTop from '../ScrollToTop/ScrollToTop'; // Adjust the import path as necessary

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weeklymenu" element={<WeeklyMenu />} />
        <Route path="/mealplans" element={<MealPlans />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/musclegain" element={<MuscleGain />} />
        <Route path="/cutting" element={<Cutting />} />
        <Route path="/chefschoice" element={<ChefsChoice />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
