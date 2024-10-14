import React, { useState } from 'react';
import { FaCalendarAlt, FaCalendarDay, FaCalendar } from 'react-icons/fa';
import CalendarModal from './CalendarModal'; // Import the CalendarModal
import './ExpandableButton.css';

const ExpandableButton: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState(<FaCalendarAlt size={16} />);
  const [isExpanded, setIsExpanded] = useState(false);
  const [calendarType, setCalendarType] = useState<'month' | '3-month' | 'year' | null>(null);

  const handleIconChange = (newIcon: JSX.Element, type: 'month' | '3-month' | 'year') => {
    setSelectedIcon(newIcon);
    setCalendarType(type); // Set the type of calendar to open
    setIsExpanded(false);
  };

  const handleMainIconClick = () => {
    // Default to 'month' view if no view is selected, or open the currently selected view
    setCalendarType(calendarType || 'month');
  };

  const handleCloseModal = () => setCalendarType(null); // Close the modal

  return (
    <div
      className="expandable-container"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="expandable-button">
        <span className="tooltip">Calendar</span>
        {selectedIcon}
      </div>

      {/* Toggle-switcher for button expansion */}
      <div className={`toggle-switcher ${isExpanded ? 'expanded' : ''}`}>
        <div
          className="main-button-icon"
          onClick={handleMainIconClick} // Open calendar on icon click
        >
          {selectedIcon}
        </div>
        <div className={`sub-buttons ${isExpanded ? 'visible' : ''}`}>
          {/* <button
            className="sub-button"
            onClick={() => handleIconChange(<FaCalendarAlt size={16} />, 'month')}
          >
            <span className="tooltip">1-Month Calendar</span>
            <FaCalendarDay />
          </button> */}
          <button
            className="sub-button"
            onClick={() => handleIconChange(<FaCalendar size={16} />, '3-month')}
          >
            <span className="tooltip">3-Month Calendar</span>
            <FaCalendarDay/>
          </button>
          <button
            className="sub-button"
            onClick={() => handleIconChange(<FaCalendar size={16} />, 'year')}
          >
            <span className="tooltip">Year Calendar</span>
            <FaCalendar />
          </button>
        </div>
      </div>

      {/* Show CalendarModal when a calendar type is selected */}
      {calendarType && (
        <CalendarModal onClose={handleCloseModal} view={calendarType} />
      )}
    </div>
  );
};

export default ExpandableButton;
