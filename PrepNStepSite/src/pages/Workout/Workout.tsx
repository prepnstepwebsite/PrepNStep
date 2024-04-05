//Workout.tsx

import { useState, useEffect } from "react";
import TrainerDays from "./WorkoutData";
import "./workout.scss";

import ContactImage from "../../assets/images/FitnessMatch.jpg";
import FormImage from "../../assets/images/FitnessForm.jpg";

function Workout() {
  // State to store the current date and the displayed week's start date
  const [currentDate, setCurrentDate] = useState(new Date());
  const [displayedWeekStartDate, setDisplayedWeekStartDate] = useState(
    new Date()
  );
  const [selectedDay, setSelectedDay] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the current date every minute
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Updates every minute

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to format the date into a string "Day, Date"
  const formatDate = (date: Date) => {
    return {
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
      day: date.toLocaleDateString("en-US", { day: "numeric" }),
    };
  };

  // Function to get the month and year for the calendar header
  const getMonthYear = (startDate: Date): string => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6); // Last day of the displayed week

    const startMonth = startDate.toLocaleDateString("en-US", { month: "long" });
    const endMonth = endDate.toLocaleDateString("en-US", { month: "long" });
    const year = startDate.getFullYear();

    // If the months are different, format as "Month - Month Year", otherwise "Month Year"
    return startMonth === endMonth
      ? `${startMonth} ${year}`
      : `${startMonth} - ${endMonth} ${year}`;
  };

  // Function to move to the previous week
  const goToPrevWeek = () => {
    setDisplayedWeekStartDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  // Function to move to the next week
  const goToNextWeek = () => {
    setDisplayedWeekStartDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  // Function to reset to the current week and set selected day to today
  const goToCurrentWeek = () => {
    const today = new Date(); // Get today's date
    const startOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay())
    ); // Find Sunday of the current week
    setCurrentDate(new Date()); // Reset the current date
    setDisplayedWeekStartDate(startOfWeek); // Set the start of the week
    setSelectedDay(new Date()); // Set the selected day to today
  };

  // Create a new Date object for each day of the week based on displayedWeekStartDate
  const daysOfWeek = Array.from({ length: 7 }).map((_, index) => {
    const date = new Date(displayedWeekStartDate);
    date.setDate(date.getDate() - date.getDay() + index);
    return date;
  });

  const getClassesForAllTrainers = (day: string) => {
    return TrainerDays.map((trainer) => ({
      ...trainer,
      classes: trainer.schedule[day] || [],
    }));
  };

  const handleDayClick = (date: Date) => {
    setSelectedDay(date);
  };

  const isSameDay = (a: Date, b: Date) => {
    return (
      a.getDate() === b.getDate() &&
      a.getMonth() === b.getMonth() &&
      a.getFullYear() === b.getFullYear()
    );
  };

  return (
    <>
      {/* Header */}
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Scheduled Fitness</h1>
          <p className="header-subtitle">
            Join our personalized workout routines to energize your fitness
            journey
          </p>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="calendar-header-container">
        <button className="nav-button prev" onClick={goToPrevWeek}>
          &lt;
        </button>
        <div className="month-year-header">
          {getMonthYear(displayedWeekStartDate)}
        </div>
        <button className="nav-button next" onClick={goToNextWeek}>
          &gt;
        </button>
      </div>

      {/* Today Button */}
      <div className="today-button-container">
        <button className="today-button" onClick={goToCurrentWeek}>
          Today
        </button>
      </div>

      {/* Calendar */}
      <div className="calendar-container">
        <div className="week">
          {daysOfWeek.map((date, index) => {
            const isToday = isSameDay(date, currentDate);
            const isSelectedDay = isSameDay(date, selectedDay);
            const { weekday, day } = formatDate(date);

            return (
              <div
                key={index}
                className={`day-column ${isToday ? "today" : ""} ${
                  isSelectedDay ? "selected" : ""
                }`}
                onClick={() => handleDayClick(date)}
              >
                <div className="date-header">
                  <div className="weekday">{weekday}</div>
                  <div className="day-number">{day}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="black-line-top"></div>

        {selectedDay && (
          <div className="trainers-container">
            {getClassesForAllTrainers(
              selectedDay.toLocaleDateString("en-US", { weekday: "long" })
            ).map((trainer, trainerIndex) => (
              <div key={trainerIndex} className="trainer-schedule">
                <div className="trainer-top">
                  <div className="trainer-image-container">
                    {" "}
                    {/* This is the new wrapper div */}
                    <img
                      src={trainer.profilePic}
                      alt={`${trainer.name}`}
                      className="trainer-pic"
                    />
                  </div>
                  <div className="trainer-info">
                    <h3 className="trainer-name">{trainer.name}</h3>
                    <p className="trainer-bio">{trainer.bio}</p>
                  </div>
                </div>
                <div className="trainer-bottom">
                  <div className="classes">
                    {trainer.classes.map((cls, classIndex) => (
                      <div key={classIndex} className="class">
                        <div className="class-title">{cls.title}</div>
                        <div className="class-time">{cls.time}</div>
                        <div className="class-desc">{cls.description}</div>
                      </div>
                    ))}
                  </div>
                  <button className="book-button">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


        <div className="black-line"></div>

        {/* Page Selector */}
        <div className="page-selector">
          <button className="page-nav prev">PREV</button>
          {[1, 2, 3, 4, 5].map((number) => (
            <button
              key={number}
              className={`page-number ${number === 1 ? "active" : ""}`}
            >
              {number}
            </button>
          ))}
          <button className="page-nav next">NEXT</button>
        </div>
    </>
  );
}

export default Workout;
