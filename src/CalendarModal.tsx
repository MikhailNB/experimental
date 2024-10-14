// src/CalendarModal.tsx
import React from 'react';
import Calendar from 'react-calendar';
import './CalendarModal.css';

interface CalendarModalProps {
  onClose: () => void;
  view: 'month' | 'year' | '3-month' | 'yearly';
}

const CalendarModal: React.FC<CalendarModalProps> = ({ onClose, view }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const months = Array.from({ length: 12 }, (_, i) => new Date(currentYear, i, 1));

  const threeMonths = [
    new Date(currentYear, currentMonth, 1),
    new Date(currentYear, currentMonth + 1, 1),
    new Date(currentYear, currentMonth + 2, 1),
  ];

  return (
    <div className="calendar-modal">
      <div className="calendar-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {view === 'yearly' ? (
          <div className="yearly-calendar">
            {months.map((monthStartDate) => (
              <Calendar
                key={monthStartDate.getMonth()}
                view="month"
                activeStartDate={monthStartDate}
                showNeighboringMonth={false}
                className="react-calendar"
              />
            ))}
          </div>
        ) : view === '3-month' ? (
          <div className="three-month-calendar">
            {threeMonths.map((monthStartDate, index) => (
              <Calendar
                key={index}
                view="month"
                activeStartDate={monthStartDate}
                showNeighboringMonth={false}
                className="react-calendar"
              />
            ))}
          </div>
        ) : (
          <Calendar
            view="month"
            showNeighboringMonth={false}
            className="react-calendar"
          />
        )}
      </div>
    </div>
  );
};

export default CalendarModal;
