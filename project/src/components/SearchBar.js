import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/SearchBar.css'; // Подключаем стили

const SearchBar = () => {
  const [showCalendar, setShowCalendar] = useState(false); // Состояние для отображения календаря
  const [selectedDate, setSelectedDate] = useState(null); // Состояние для выбранной даты
  const [showRooms, setShowRooms] = useState(false); // Состояние для отображения комнат
  const [selectedRoom, setSelectedRoom] = useState(null); // Состояние для выбранной комнаты
  const [showTimePicker, setShowTimePicker] = useState(false); // Состояние для выбора времени
  const [selectedTime, setSelectedTime] = useState(null); // Состояние для выбранного времени

  // Доступные комнаты для любой даты с указанием, когда они заняты
  const roomsList = [
    { room: 'Conference Hall', times: ['10:00', '12:00', '14:00'], bookedTimes: [] },
    { room: 'Meeting Room 1', times: ['09:00', '11:00', '15:00'], bookedTimes: [] },
    { room: 'Meeting Room 2', times: ['10:00', '12:30', '16:00'], bookedTimes: ['12:30', '16:00'] }, // Занятые слоты
    { room: 'Secure Room', times: ['11:00', '13:00', '17:00'], bookedTimes: [] }
  ];

  // Форматируем дату
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Обработчик выбора даты
  const handleDateChange = (date) => {
    setSelectedDate(date); // Сохраняем выбранную дату
    setShowCalendar(false); // Закрываем календарь
    setShowRooms(true); // Открываем комнаты
  };

  // Обработчик выбора комнаты
  const handleRoomSelect = (room) => {
    setSelectedRoom(room); // Сохраняем выбранную комнату
    setShowRooms(false); // Закрываем окно с комнатами
    setShowTimePicker(true); // Открываем выбор времени
  };

  // Обработчик выбора времени
  const handleTimeSelect = (time) => {
    setSelectedTime(time); // Сохраняем выбранное время
    setShowTimePicker(false); // Закрываем выбор времени
    alert(`You have booked ${selectedRoom} on ${formatDate(selectedDate)} at ${time}`);
  };

  return (
    <div className="search-bar">
      {/* Поле поиска с иконкой лупы */}
      <div className="search-input-container">
        <input type="text" placeholder="Search address, or near you" className="search-input" />
        <button className="search-icon-btn">
          <i className="fa fa-search"></i> {/* Иконка лупы */}
        </button>
      </div>
      
      <div className="date-picker">
        <button className="date-btn" onClick={() => setShowCalendar(!showCalendar)}>
          Date
        </button>

        {/* Всплывающее окно календаря */}
        {showCalendar && (
          <div className="calendar-popup">
            <div className="calendar-container">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                selectRange={false} // Одиночная дата
              />
            </div>
            {/* Кнопка закрытия календаря (внизу по центру) */}
            <button className="close-calendar-btn" onClick={() => setShowCalendar(false)}>
              Close
            </button>
          </div>
        )}

        {/* Всплывающее окно комнат */}
        {showRooms && (
          <div className="rooms-popup">
            <h3>Available Rooms for {selectedDate ? formatDate(selectedDate) : ''}</h3>
            <div className="room-status-list">
              {roomsList.map((room, index) => (
                <div key={index} className="room-status">
                  <span>{room.room}</span>
                  <button className="select-room-btn" onClick={() => handleRoomSelect(room.room)}>
                    Select
                  </button>
                </div>
              ))}
            </div>
            <button className="close-btn" onClick={() => setShowRooms(false)}>
              Close
            </button>
          </div>
        )}

        {/* Всплывающее окно для выбора времени */}
        {showTimePicker && (
          <div className="time-popup">
            <h3>Select Time for {selectedRoom} on {selectedDate ? formatDate(selectedDate) : ''}</h3>
            <div className="time-list">
              {roomsList.find(room => room.room === selectedRoom)?.times.map((time, index) => {
                const isBooked = roomsList.find(room => room.room === selectedRoom)?.bookedTimes.includes(time);
                return (
                  <div key={index} className="time-slot">
                    <button
                      className={`time-btn ${isBooked ? 'booked' : 'free'}`}
                      onClick={() => !isBooked && handleTimeSelect(time)}
                      disabled={isBooked} // Отключаем кнопку, если время занято
                    >
                      {time} {isBooked ? ' (Occupied)' : ''}
                    </button>
                  </div>
                );
              })}
            </div>
            <button className="close-btn" onClick={() => setShowTimePicker(false)}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
