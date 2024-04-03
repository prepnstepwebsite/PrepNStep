//Workout.tsx

import { useState, useEffect } from "react";
import "./workout.scss";

function Workout() {
  // State to store the current date and the displayed week's start date
  const [currentDate, setCurrentDate] = useState(new Date());
  const [displayedWeekStartDate, setDisplayedWeekStartDate] = useState(
    new Date()
  );

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
  const getMonthYear = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  // Function to move to the previous week
  const goToPrevWeek = () => {
    const newDate = new Date(displayedWeekStartDate);
    newDate.setDate(newDate.getDate() - 7);
    setDisplayedWeekStartDate(newDate);
  };

  // Function to move to the next week
  const goToNextWeek = () => {
    const newDate = new Date(displayedWeekStartDate);
    newDate.setDate(newDate.getDate() + 7);
    setDisplayedWeekStartDate(newDate);
  };

  // Function to reset to the current week
  const goToCurrentWeek = () => {
    setDisplayedWeekStartDate(new Date());
  };

  // Create a new Date object for each day of the week based on displayedWeekStartDate
  const daysOfWeek = Array.from({ length: 7 }).map((_, index) => {
    const date = new Date(displayedWeekStartDate);
    date.setDate(date.getDate() - date.getDay() + index);
    return date;
  });

  return (
    <>
      {/* Beginning of Header */}
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Scheduled Fitness</h1>
          <p className="header-subtitle">
            Join our personalized workout routines to energize your fitness
            journey
          </p>
        </div>
      </div>

      {/* Beginning of Calander */}
      <div className="calendar-header-container">
        <button className="nav-button prev" onClick={goToPrevWeek}>
          &lt;
        </button>
        <div className="calendar-header">
          {getMonthYear(displayedWeekStartDate)}
        </div>
        <button className="nav-button next" onClick={goToNextWeek}>
          &gt;
        </button>
      </div>

      <button className="today-button" onClick={goToCurrentWeek}>
        Today
      </button>

      <div className="calendar-container">
        {/* Week Days */}
        <div className="week">
          {daysOfWeek.map((date, index) => {
            const isToday = date.toDateString() === currentDate.toDateString();
            const { weekday, day } = formatDate(date); // Destructure the returned object
            return (
              <div key={index} className={`day ${isToday ? "today" : ""}`}>
                <div className="weekday">{weekday}</div> {/* Display weekday */}
                <div className="day-number">{day}</div>{" "}
                {/* Display day number */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Workout;
